const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const noteRoutes = require('./routes/notes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/notes', noteRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use(errorHandler);

module.exports = app;