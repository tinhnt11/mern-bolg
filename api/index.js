import express from 'express';
import mongooes from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

mongooes.connect(process.env.MONGO).then(()  => {
    console.log('MongoDb is connected');
}).catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log("Server is running on portt 3000!");
})