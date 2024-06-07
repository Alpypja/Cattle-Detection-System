const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const fs = require("fs");
const app = express();
const cors = require("cors"); 
const port = 3000;
const bodyParser = require('body-parser')


app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    allowedHeaders: "*",
    origin: "*",
}))
// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cattles'
});

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Define route for handling file upload
app.post('/upload', upload.single('image'), (req, res) => {
    try {
        // Read image data from file

        // Insert image data and filename into MySQL database
        const sql = 'INSERT INTO images (filename, image_data, rfid) VALUES (?, ?, ?)';
        const values = [req.body.fileName, req.body.image, req.body.rfid];

        connection.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error inserting image into MySQL:', err);
                res.status(500).json({ error: 'Error inserting image into database' });
                return;
            }
            console.log('Image inserted into MySQL:', result);
            res.json({ message: 'Image uploaded and inserted into database successfully' });
        });

    } catch (err) {
        console.error('Error processing image:', err);
        res.status(500).json({ error: 'Error processing image' });
    }
});

app.post('/api/register', (req, res) => {
    const { name, number, rfid, cattleName } = req.body;
    const sql = 'INSERT INTO registration (name, number, rfid, cattleName) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, number, rfid, cattleName], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            throw err;
        }
        res.status(200).json({ message: 'User registered successfully' });
    });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
