import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import {json} from "express"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient();

export const createRent = async (req,res) => {
  try{
    const {startingdate, enddate, picklocation, droplocation ,lesseExperience, lesseID, driverLicense,reason } = req.body

    const lessee =await prisma.rentalDetail.create({
      data: {
        startingdate:new Date (startingdate),
        enddate:new Date (enddate),
        picklocation: picklocation,
        droplocation: droplocation,
        lesseExperience: lesseExperience,
        lesseID: lesseID,
        driverLicense: driverLicense,
        reason: reason,
      },
      select:{
        id: true,
        startingdate: true,
        enddate: true,
        picklocation: true,
        droplocation: true,
        lesseExperience: true,
        lesseID: true,
        driverLicense: true,
        reason: true,
      },
    })
    res.status(201).json({success:true, message:"Booked Successfully"})
  }
  catch(err){
    res.status(500).json({success:false, message:"Server Failed"})
  }
}

export const getReservation = async (req,res) => {
  try{
    const reserveDetail = await prisma.rentalDetail.findMany()
    res.status(200).json({success:true, reserveDetail})
  }
  catch(err){
    res.status(500).json({success:false,message:"An Error Occured"})
  }
}

export const deleteReseve = async (req,res) => {
  const id = req.params.id
  try{
    const deleteReseveInfo = await prisma.rentalDetail.delete({
      where:{id:id},
      select:{
        startingdate: true,
        enddate: true,
        picklocation: true,
        droplocation: true,
        lesseExperience: true,
        lesseID: true,
        driverLicense: true,
        reason: true,
        id:true
      }
    })
    res.status(200).json(deleteReseveInfo)
  }
  catch(err){
    res.status(500).json({success:false, message:"An error occured"})
  }
}