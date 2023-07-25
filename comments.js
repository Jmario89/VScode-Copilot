// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create an express app
const app = express();
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
// Create a route for the app
app.get('/posts', (req, res) => {
    res.send([
        {
            title: 'Hello World!',
            description: 'Hi there! How are you?'
        }
    ]);
});
// Listen on port 8081
app.listen(process.env.PORT || 8081);
