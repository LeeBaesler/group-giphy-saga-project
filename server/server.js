const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');
const searchRouter = require('./routes/search.router')
const skydiveRouter = require('./routes/skydive.router')


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/search', searchRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);
app.use('/api/skydive', skydiveRouter);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
