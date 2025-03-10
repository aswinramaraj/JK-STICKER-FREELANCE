
    const express = require('express');
    const mongoose = require('mongoose');
    const dotenv = require('dotenv');
    const cors = require('cors');
    const ContactModel = require('./model/contact')
    const Img = require('./model/Img')
    
    
    dotenv.config(); // Load environment variables
    
    const app = express();
    const port = process.env.PORT || 4000;
    
    // Middlewares
    app.use(cors());
    app.use(express.json());
    
    // MongoDB connection
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("MongoDB connected successfully"))
        .catch((err) => console.log(`MongoDB connection error: ${err}`));
    
    // Routes
    app.get('/', (req, res) => {
        res.send("Server is running");
    });
    
    app.post('/contact', async (req, res) => {
        const { name, email, message } = req.body;
        console.log("Received data:", req.body);
    
        // Create a new contact document in the database (if needed)
        try {
            const newContact = new ContactModel({ name, email, message });
            await newContact.save(); // Save to the database
    
            res.status(200).json({ message: "Data received and saved successfully!" });
        } catch (err) {
            console.error("Error saving contact data:", err);
            res.status(500).json({ message: "There was an error processing your request" });
        }
    });

    app.get('/img', async (req, res) => {
        try {
            const img = await Img.find();  // Fetch all images from the database
            if (img.length > 0) { 
                console.log(img); 
                res.status(200).json(img);  // Send the images as a response
            } else {
                console.log("No images found");
                res.status(404).json({ message: "No images found" });  // If no images found
            }
        } catch (error) {
            console.error('Error fetching images:', error);
            res.status(500).json({ message: "Error fetching images" });  // Handle error
        }
    });
    
    
    // Start the server
    app.listen(port, () => {
        console.log(`Server running successfully on port ${port}`);
    });
    