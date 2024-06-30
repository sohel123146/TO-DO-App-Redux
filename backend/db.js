const mongoose = require('mongoose');

async function connectToMongo() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Todos');
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

module.exports = connectToMongo;