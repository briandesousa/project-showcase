const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
app.set('port', PORT);
app.use(bodyParser.json());

app.use('/api', require(path.join(__dirname, 'api', 'routes')));

app.use('/health', (req, res, next) => {
    res.json({
        "app-config": {
            "env": app.get('env'),
            "port": app.get('port')
        }
    });
});

app.use('/', express.static(path.join(__dirname, 'build')));

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
