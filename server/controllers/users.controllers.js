import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async (req,res) => {
  try{
    const{name,lesseID,email,driverLicense,password} = req.body
    const hashedPassword = bcrypt.hashSync(password,10)
    const newUser = await prisma.user.create({
      data:{
        name:name,
        lesseID:lesseID,
        email:email,
        driverLicense:driverLicense,
        password:hashedPassword
      },
      select: {
        id:true,
        name:true,
        lesseID:true,
        email:true,
        driverLicense:true,
        password:true
      }
    })
    res.status(200).json(newUser)
  }
  catch(err){
    res.status(500).json({success:false,message:err.message})
  }
}
