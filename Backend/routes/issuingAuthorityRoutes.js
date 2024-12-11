const express = require('express');
const router = express.Router();
const { 
    signup, 
    login, 
    uploadVerificationDocuments 
} = require('../controllers/issuingAuthorityController');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/fileUpload');

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected routes
router.post(
    '/upload-documents', 
    protect, 
    upload.array('documents', 5), 
    uploadVerificationDocuments
);

module.exports = router; 