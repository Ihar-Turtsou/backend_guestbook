import express from 'express';
import messageRoutes from './routes/messageRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use("/messages", messageRoutes)


const PORT = process.env.PORT || 3000


app.listen(PORT, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server is runing on ${PORT}`)
})
