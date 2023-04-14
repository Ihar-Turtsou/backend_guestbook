import express from 'express';
import { getMessage, createMessage } from '../controllers/messageController.js';
import { messageValidation } from '../middleware/validation.js';
import { validationResult } from 'express-validator';

const router = express.Router();

router.get("/", getMessage);

router.post("/", messageValidation, (req,res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    next();

}, createMessage)


export default router;