-- CreateTable
CREATE TABLE "rental_table" (
    "id" TEXT NOT NULL,
    "startingdate" TIMESTAMP(3) NOT NULL,
    "enddate" TIMESTAMP(3) NOT NULL,
    "picklocation" TEXT NOT NULL,
    "droplocation" TEXT NOT NULL,
    "lesseName" TEXT NOT NULL,
    "lesseNumber" INTEGER NOT NULL,
    "lesseExperience" INTEGER NOT NULL,
    "lesseID" INTEGER NOT NULL,
    "driverLicense" INTEGER NOT NULL,

    CONSTRAINT "rental_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rental_table_lesseNumber_lesseID_driverLicense_key" ON "rental_table"("lesseNumber", "lesseID", "driverLicense");
