import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const validateInformation = async (req,res,next) => {
  const {startingdate, enddate, picklocation, droplocation, lesseName, lesseNumber,lesseExperience, lesseID, driverLicense } = req.body
  if(!startingdate)
    return res.status(400).json({success:false, message:"Starting Date is required"})
  if(!enddate)
    return res.status(400).json({success:false, message:"End Date is required"})
  if(!picklocation)
    return res.status(400).json({success:false, message:"Pick up location is required"})
  if(!droplocation)
    return res.status(400).json({success:false, message:"Drop off location is required"})
  if(!lesseName)
    return res.status(400).json({success:false, message:"lesseName is required"})
  if(!lesseNumber)
    return res.status(400).json({success:false, message:"lesseNumber is required"})
  if(!lesseExperience)
    return res.status(400).json({success:false, message:"lesseExperience is required"})
  if(!lesseID)
    return res.status(400).json({success:false, message:"lesseID is required"})
  if(!driverLicense)
    return res.status(400).json({success:false, message:"driver License No is required"})

  const lesseewithlesseNumber = await prisma.rentalDetails.findFirst({
    where: {lesseNumber:lesseNumber},
  })
  if(lesseewithlesseNumber){
    return res.status(400).json({success:false, message:"The Phone Number already exists"})
  }

  const lesseewithlesseID = await prisma.rentalDetails.findFirst({
    where:{lesseID:lesseID}
  })
  if(lesseewithlesseID){
    return res.status(400).json({success:false, message:"The Lessee ID already exists"})
  }

  const lesseewithdriverLicense = await prisma.rentalDetails.findFirst({
    where:{driverLicense:driverLicense}
  })
  if(lesseewithdriverLicense){
    return res.startingdate(400).json({success:false, message:"Driver License No alredy exists"})
  }
  next()
}