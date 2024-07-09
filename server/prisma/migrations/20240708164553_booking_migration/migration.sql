/*
  Warnings:

  - You are about to drop the `rental_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "rental_table";

-- CreateTable
CREATE TABLE "rentals_table" (
    "id" TEXT NOT NULL,
    "startingdate" TIMESTAMP(3) NOT NULL,
    "enddate" TIMESTAMP(3) NOT NULL,
    "picklocation" TEXT NOT NULL,
    "droplocation" TEXT NOT NULL,
    "lesseExperience" INTEGER NOT NULL,
    "lesseID" INTEGER NOT NULL,
    "driverLicense" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "rentals_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rentals_table_lesseID_driverLicense_key" ON "rentals_table"("lesseID", "driverLicense");
