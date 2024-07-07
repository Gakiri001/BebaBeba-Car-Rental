import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import {json} from "express"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

export const createRent = async (req,res) => {
  try{
    const {startingdate, enddate, picklocation, droplocation, lesseName, lesseNumber,lesseExperience, lesseID, driverLicense } = req.body

    const lessee =await prisma.rentalDetails.create({
      data: {
        startingdate:new Date (startingdate),
        enddate:new Date (enddate),
        picklocation: picklocation,
        droplocation: droplocation,
        lesseName: lesseName,
        lesseNumber: lesseNumber,
        lesseExperience: lesseExperience,
        lesseID: lesseID,
        driverLicense: driverLicense,
      },
      select:{
        id: true,
        startingdate: true,
        enddate: true,
        picklocation: true,
        droplocation: true,
        lesseName: true,
        lesseNumber: true,
        lesseExperience: true,
        lesseID: true,
        driverLicense: true,
      },
    })
    res.status(201).json({success:true, message:"Booked Successfully"})
  }
  catch(err){
    res.status(500).json({success:false, message:"Server Failed"})
  }
}