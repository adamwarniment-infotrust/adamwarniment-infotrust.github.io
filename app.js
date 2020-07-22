const express = require('express');
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://admin:may132017@cluster0.blhzm.gcp.mongodb.net/ALIEN_DB?retryWrites=true&w=majority';

const app = express();

// connect to mongoDB Atlas Free
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

// routers
const alienRouter = require('./routes/Aliens');
app.use('/aliens', alienRouter);

app.listen(9000, () => {
    console.log('server started');
})