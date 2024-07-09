import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const validateInformation = async (req, res, next) => {
  const { startingdate, enddate, picklocation, droplocation, lesseExperience, lesseID, driverLicense,reason } = req.body;

  // Check if all required fields are provided
  if (!startingdate)
    return res.status(400).json({ success: false, message: "Starting Date is required" });
  if (!enddate)
    return res.status(400).json({ success: false, message: "End Date is required" });
  if (!picklocation)
    return res.status(400).json({ success: false, message: "Pick up location is required" });
  if (!droplocation)
    return res.status(400).json({ success: false, message: "Drop off location is required" });
  if (!lesseExperience)
    return res.status(400).json({ success: false, message: "Lessee Experience is required" });
  if (!lesseID)
    return res.status(400).json({ success: false, message: "Lessee ID is required" });
  if (!driverLicense)
    return res.status(400).json({ success: false, message: "Driver License No is required" });
  if (!reason)
    return res.status(400).json({ success: false, message: "reason No is required" });

  // Parse dates
  const startDate = new Date(startingdate);
  const endDate = new Date(enddate);
  const today = new Date();

  // Check if startingdate is today or in the future
  if (startDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
    return res.status(400).json({ success: false, message: "Starting Date must be today or in the future" });
  }

  // Check if enddate is at least one day after startingdate
  if (endDate <= startDate) {
    return res.status(400).json({ success: false, message: "End Date must be at least one day after Starting Date" });
  }


  // Check if lesseID already exists
  const lesseewithlesseID = await prisma.rentalDetail.findFirst({
    where: { lesseID: lesseID },
  });
  if (lesseewithlesseID) {
    return res.status(400).json({ success: false, message: "The Lessee ID already exists" });
  }

  // Check if driverLicense already exists
  const lesseewithdriverLicense = await prisma.rentalDetail.findFirst({
    where: { driverLicense: driverLicense },
  });
  if (lesseewithdriverLicense) {
    return res.status(400).json({ success: false, message: "Driver License No already exists" });
  }

  next();
};
