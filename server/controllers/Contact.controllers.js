import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import {json} from "express"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

export const createContact = async (req,res) => {
  try{
    const {name, email, subject, explanation } = req.body

    const lessee =await prisma.contactSubject.create({
      data: {
    
        name: name,
        email: email,
        subject: subject,
        explanation: explanation,
      },
      select:{
        id: true,
        name: true,
        email: true,
        subject: true,
        explanation: true,
      },
    })
    res.status(201).json({success:true, message:"Response Successfully"})
  }
  catch(err){
    res.status(500).json({success:false, message:"Server Failed"})
  }
}