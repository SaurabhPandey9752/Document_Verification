const express = require('express');
const router = express.Router();
const { 
    signup, 
    login, 
    getProfile, 
    updateProfile, 
    forgotPassword 
} = require('../controllers/userController');
const { protect } = require('../middleware/auth');

// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

// Protected routes
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

module.exports = router; 