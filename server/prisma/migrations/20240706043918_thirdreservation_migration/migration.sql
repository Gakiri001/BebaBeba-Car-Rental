/*
  Warnings:

  - You are about to drop the column `date` on the `reservation_table` table. All the data in the column will be lost.
  - You are about to drop the column `date2` on the `reservation_table` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `reservation_table` table. All the data in the column will be lost.
  - You are about to drop the column `location2` on the `reservation_table` table. All the data in the column will be lost.
  - Added the required column `droplocation` to the `reservation_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enddate` to the `reservation_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `picklocation` to the `reservation_table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startingdate` to the `reservation_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reservation_table" DROP COLUMN "date",
DROP COLUMN "date2",
DROP COLUMN "location",
DROP COLUMN "location2",
ADD COLUMN     "droplocation" TEXT NOT NULL,
ADD COLUMN     "enddate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "picklocation" TEXT NOT NULL,
ADD COLUMN     "startingdate" TIMESTAMP(3) NOT NULL;
