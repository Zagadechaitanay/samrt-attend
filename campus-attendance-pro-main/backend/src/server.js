const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS - allow multiple frontend ports
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:8080', 'http://localhost:3000'],
    credentials: true
}));

// Mount routers
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

// Basic route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Campus Attendance API is running'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: err.message || 'Server Error'
    });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`❌ Error: ${err.message}`);
    server.close(() => process.exit(1));
});
