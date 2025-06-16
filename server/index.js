import express from 'express';
import mongoose from 'mongoose';
import authrout from './routs/AuthRout.js';
import dotenv from 'dotenv';
import cors from 'cors'
import path from 'path';
import cookieParser from 'cookie-parser';

dotenv.config()
const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL

const app = express();


app.use(express.static(path.join(__dirname, '../client/build')));
app.use(cookieParser())
app.use(cors({origin: 'http://hibitblack.on:3000', credentials: true}));
app.use(express.json());
app.use('/api/auth', authrout)


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

async function AppStart() {
    try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log('START' + PORT))
    } catch(e) {
        console.log(e)

    }
}

AppStart();