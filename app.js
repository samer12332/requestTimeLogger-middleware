const express = require('express');
const app = express();

const timeTaken = (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.originalUrl} took ${duration} ms`);
    });
    next();
}


app.get('/', timeTaken, (req, res) => {
    res.send('Home page');
});

app.get('/about', timeTaken, (req, res) => {
    res.send('About page');
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});