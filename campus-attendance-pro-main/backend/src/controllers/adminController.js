const User = require('../models/User');
const Student = require('../models/Student');
const Faculty = require('../models/Faculty');
const Class = require('../models/Class');
const Subject = require('../models/Subject');

// @desc    Get all users (Admin only)
// @route   GET /api/admin/users
// @access  Private/Admin
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');

        res.status(200).json({
            success: true,
            count: users.length,
            users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Server error'
        });
    }
};

// @desc    Create new user (Admin only)
// @route   POST /api/admin/users
// @access  Private/Admin
exports.createUser = async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;

        // Validation
        if (!fullName || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        if (!['admin', 'faculty', 'student', 'parent'].includes(role)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid role'
            });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with this email'
            });
        }

        // Create user
        const user = await User.create({
            fullName,
            email,
            password,
            role
        });

        // Create role-specific record
        if (user.role === 'student') {
            await Student.create({
                user: user._id,
                rollNo: req.body.rollNo || `STU${Date.now()}`,
                department: req.body.department || 'General',
                semester: req.body.semester || 1
            });
        } else if (user.role === 'faculty') {
            await Faculty.create({
                user: user._id,
                employeeId: req.body.employeeId || `EMP${Date.now()}`,
                department: req.body.department || 'General'
            });
        }

        res.status(201).json({
            success: true,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Create user error:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Server error'
        });
    }
};

// @desc    Update user role
// @route   PUT /api/admin/users/:id/role
// @access  Private/Admin
exports.updateUserRole = async (req, res) => {
    try {
        const { role } = req.body;

        if (!['admin', 'faculty', 'student', 'parent'].includes(role)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid role'
            });
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { role },
            { new: true, runValidators: true }
        ).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Server error'
        });
    }
};

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Delete associated records
        await Student.deleteMany({ user: req.params.id });
        await Faculty.deleteMany({ user: req.params.id });

        await user.deleteOne();

        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Server error'
        });
    }
};

// @desc    Get all classes
// @route   GET /api/admin/classes
// @access  Private/Admin
exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();

        res.status(200).json({
            success: true,
            count: classes.length,
            classes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Server error'
        });
    }
};

// @desc    Create class
// @route   POST /api/admin/classes
// @access  Private/Admin
exports.createClass = async (req, res) => {
    try {
        const classData = await Class.create(req.body);

        res.status(201).json({
            success: true,
            class: classData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Server error'
        });
    }
};

// @desc    Get all subjects
// @route   GET /api/admin/subjects
// @access  Private/Admin
exports.getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();

        res.status(200).json({
            success: true,
            count: subjects.length,
            subjects
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Server error'
        });
    }
};

// @desc    Create subject
// @route   POST /api/admin/subjects
// @access  Private/Admin
exports.createSubject = async (req, res) => {
    try {
        const subject = await Subject.create(req.body);

        res.status(201).json({
            success: true,
            subject
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Server error'
        });
    }
};

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
// @access  Private/Admin
exports.getDashboardStats = async (req, res) => {
    try {
        const [totalUsers, totalStudents, totalFaculty, totalClasses, totalSubjects] = await Promise.all([
            User.countDocuments(),
            Student.countDocuments(),
            Faculty.countDocuments(),
            Class.countDocuments(),
            Subject.countDocuments()
        ]);

        res.status(200).json({
            success: true,
            stats: {
                totalUsers,
                totalStudents,
                totalFaculty,
                totalClasses,
                totalSubjects
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Server error'
        });
    }
};
