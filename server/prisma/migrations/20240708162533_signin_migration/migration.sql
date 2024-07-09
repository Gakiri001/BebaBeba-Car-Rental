/*
  Warnings:

  - You are about to drop the `contact_table` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lessee_table` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reservation_table` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "contact_table";

-- DropTable
DROP TABLE "lessee_table";

-- DropTable
DROP TABLE "reservation_table";

-- DropTable
DROP TABLE "users_table";

-- CreateTable
CREATE TABLE "user_table" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_table_email_key" ON "user_table"("email");
