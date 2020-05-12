const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
app.set('port', PORT);
app.use(bodyParser.json());

app.use('/api/', require(path.join(__dirname, 'routes', 'api')));

app.use((req, res, next) => {
    const err = new Error(`${req.method} ${req.url} Not Found`);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

app.listen(PORT, () => {
    console.log(`Express server started on port ${app.get('port')}`);
});


const router = express.Router();

const apiPath = __dirname + '/api/';
