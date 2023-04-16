import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getMessage = async (req,res) => {
    try {
        const messages = await prisma.message.findMany({orderBy: { createdAt: "desc"}});
        res.status(200).json(messages)
    }catch(error) {
        res.status(500).json({error: "Error while getting message list messages"});
    }
};

export const createMessage = async(req, res)=>{
    try {
        const message = await prisma.message.create({data:req.body});
        res.status(201).json({status: "seccess", message})
    } catch(error){
res.status(500).json({error: "An error occurred while saving the message"})
    }
};