/*
  Warnings:

  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Reservation";

-- CreateTable
CREATE TABLE "reservation_table" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "location2" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "date2" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reservation_table_pkey" PRIMARY KEY ("id")
);
