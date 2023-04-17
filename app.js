import express from 'express';
import cors from 'cors';
import messageRoutes from './routes/messageRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/messages", messageRoutes);

app.get('/',(req,res)=>{
    res.send('HELLO')
})

const PORT = process.env.PORT || 3001


app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server is runing on ${PORT}`)
})
