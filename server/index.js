const express = require('express');
const mongoose = require('mongoose');
const authrout = require('./routs/AuthRout.js');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');


// Получаем эквивалент __dirname


dotenv.config();

const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL;

const app = express();

// Используем правильный путь к папке build
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(cookieParser());
app.use(cors({ origin: 'http://hibitblack.on:3000', credentials: true }));
app.use(express.json());
app.use('/api/auth', authrout);

// Обрабатываем все GET-запросы, отдавая index.html из build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

async function AppStart() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('START ' + PORT));
  } catch (e) {
    console.log(e);
  }
}

AppStart();
