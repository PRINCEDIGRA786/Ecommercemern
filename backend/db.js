// const mongoose = require('mongoose')
// const mongoURI = "mongodb://127.0.0.1:27017/bazaarhub"

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,

//     });

//     // Get the default connection
//     const db = mongoose.connection;

//     // Event listener for successful connection
//     db.on('connected', () => {
//         console.log('Connected to MongoDB');
//     });

//     // Event listener for connection error
//     db.on('error', (err) => {
//         console.error(`MongoDB connection error: ${err}`);
//     });


// }

const mongoose = require('mongoose')
// const mongoURI = "mongodb://127.0.0.1:27017/netflix"
// const mongoURI = "mongodb+srv://digraprince7:<IlKqi6D7N9ovvHV6>@cluster0.1qqmyp3.mongodb.net/"
const mongoURI = "mongodb+srv://digraprince7:YFgS2gEwkdxyh7pc@cluster0.mitrrse.mongodb.net/?retryWrites=true&w=majority"
const connectToMongo = async () => {
    // mongoose.set('strictQuery', true)
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Mongo connected successfully')
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectToMongo;

