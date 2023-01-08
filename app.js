const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
const apiRouter = require('./routes/apiRouter');

mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log('Connectd to DB'))
    .catch(error => console.error(`DB connection error: ${error}`));

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});

app.use('/api', apiRouter);
