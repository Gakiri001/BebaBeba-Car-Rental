import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createReserve = async (req,res) => {
  try{
    const {picklocation,droplocation,startingdate, enddate} = req.body;
    const newReserve = await prisma.reservation.create({
      data: {
        picklocation:picklocation,
        droplocation:droplocation,
        startingdate: new Date (startingdate),
        enddate:new Date (enddate),
      },
      select:{
        id:true,
        picklocation:true,
        droplocation:true,
        startingdate:true,
        enddate:true
      }
    })
    res.status(200).json(newReserve)
  }
  catch(err){
    res.status(500).json({success:false,message:err.message})
  }
} 