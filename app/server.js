const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from ECS hello tong!',
        version: process.env.APP_VERSION || '1.0.0',
        hostname: require('os').hostname()
    });
});

// Health check endpoint — ALB và ECS dùng endpoint này
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});