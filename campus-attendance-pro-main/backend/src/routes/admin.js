const express = require('express');
const {
    createUser,
    getAllUsers,
    updateUserRole,
    deleteUser,
    getAllClasses,
    createClass,
    getAllSubjects,
    createSubject,
    getDashboardStats
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication and admin role
router.use(protect);
router.use(authorize('admin'));

// User management
router.post('/users', createUser);
router.get('/users', getAllUsers);
router.put('/users/:id/role', updateUserRole);
router.delete('/users/:id', deleteUser);

// Class management
router.get('/classes', getAllClasses);
router.post('/classes', createClass);

// Subject management
router.get('/subjects', getAllSubjects);
router.post('/subjects', createSubject);

// Dashboard stats
router.get('/stats', getDashboardStats);

module.exports = router;
