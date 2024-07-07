import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createLessee = async (req,res) => {
  try{
    const {lesseName, lesseNumber, lesseExperience, lesseID, driverLicense} = req.body
    const newLesse = await prisma.lesseeDetails.create({
      data: {
        lesseName:lesseName,
        lesseNumber:lesseNumber,
        lesseExperience:lesseExperience,
        lesseID:lesseID,
        driverLicense:driverLicense,
      },
      select: {
        id: true,
        lesseName:true,
        lesseNumber:true,
        lesseExperience:true,
        lesseID:true,
        driverLicense:true
      }
  })
  res.status(200).json(newLesse)
}
  catch(err){
    res.status(500).json({success:false,message:err.message})
  }
  }