const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Handle POST request to upload image
app.post('/upload', upload.single('image'), (req, res) => {
    res.send({ imagePath: '/uploads/' + req.file.filename });
});

// Mock route for fetching person info
app.get('/personInfo', (req, res) => {
    // Here you would typically fetch person info from a database based on the name
    // For now, let's send mock data
    const personName = req.query.name;
    const imagePath = '/uploads/' + personName.toLowerCase() + '.jpg'; // Assume images are named after persons
    const info = `Some info about ${personName}`;
    res.json({ imagePath, info });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
