const express = require('express');
const app = express();
const router  = require('../routes/router');
const connectDB = require('../database/connectDB');
const cors = require('cors');
require('dotenv/config');
const port = process.env.PORT || 3000;

// cors policy

app.use(cors(
    {origin: '*'}
))

// parsing all json and url encoded data
app.use(express.json())
app.use(express.urlencoded({extended: true}));


// middleware for the routes
app.use('/api/v1/items', router)

// app.use(express.static('./public'))

//  route 404
app.all('*', (req, res) => {

    res.status(404).send("Page not found");
})

const connectDatabase = async () => {
    await connectDB(process.env.Mongo_URI).then( () => {
        console.log('connected to db...');
    }).catch( (err) => console.log(err));
    app.listen(port, () => console.log("Listening to port 3000..."));
}
connectDatabase()

