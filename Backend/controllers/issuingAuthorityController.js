const IssuingAuthority = require('../models/IssuingAuthority');
const jwt = require('jsonwebtoken');
const { validateIssuingAuthorityInput } = require('../utils/validation');

exports.signup = async (req, res) => {
    try {
        // Validate input
        const { error } = validateIssuingAuthorityInput(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }

        const {
            organizationName,
            registrationNumber,
            email,
            password,
            address,
            contactNumber,
            authorizedPersonName,
            authorizedPersonPosition
        } = req.body;

        // Check if authority already exists
        const existingAuthority = await IssuingAuthority.findOne({
            $or: [
                { email },
                { organizationName },
                { registrationNumber }
            ]
        });

        if (existingAuthority) {
            return res.status(400).json({
                success: false,
                message: 'Organization already registered with these details'
            });
        }

        // Create new issuing authority
        const authority = new IssuingAuthority({
            organizationName,
            registrationNumber,
            email,
            password,
            address,
            contactNumber,
            authorizedPersonName,
            authorizedPersonPosition
        });

        await authority.save();

        // Generate JWT token
        const token = jwt.sign(
            { authorityId: authority._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Send verification email
        await sendVerificationEmail(authority.email, authority.organizationName);

        res.status(201).json({
            success: true,
            message: 'Issuing authority registration submitted for verification',
            token,
            authority: {
                id: authority._id,
                organizationName: authority.organizationName,
                email: authority.email,
                verificationStatus: authority.verificationStatus
            }
        });

    } catch (error) {
        console.error('Issuing Authority Signup error:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating issuing authority'
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find authority
        const authority = await IssuingAuthority.findOne({ email });
        if (!authority) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Check verification status
        if (!authority.isVerified) {
            return res.status(401).json({
                success: false,
                message: 'Account is pending verification'
            });
        }

        // Check password
        const isMatch = await authority.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // Generate token
        const token = jwt.sign(
            { authorityId: authority._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            success: true,
            token,
            authority: {
                id: authority._id,
                organizationName: authority.organizationName,
                email: authority.email,
                verificationStatus: authority.verificationStatus
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Error during login'
        });
    }
};

exports.uploadVerificationDocuments = async (req, res) => {
    try {
        const authority = await IssuingAuthority.findById(req.authority.authorityId);
        
        if (!authority) {
            return res.status(404).json({
                success: false,
                message: 'Authority not found'
            });
        }

        // Handle document upload logic here
        const documents = req.files.map(file => ({
            documentType: file.fieldname,
            documentUrl: file.path,
            uploadedAt: Date.now()
        }));

        authority.verificationDocuments.push(...documents);
        await authority.save();

        res.json({
            success: true,
            message: 'Documents uploaded successfully',
            documents: authority.verificationDocuments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error uploading documents'
        });
    }
}; 