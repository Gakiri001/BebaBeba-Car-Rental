/*
  Warnings:

  - You are about to alter the column `lesseID` on the `users_table` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `driverLicense` on the `users_table` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "users_table" ALTER COLUMN "lesseID" SET DATA TYPE INTEGER,
ALTER COLUMN "driverLicense" SET DATA TYPE INTEGER;
