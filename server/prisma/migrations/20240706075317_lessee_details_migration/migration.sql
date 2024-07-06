-- CreateTable
CREATE TABLE "lessee_table" (
    "id" TEXT NOT NULL,
    "lesseName" TEXT NOT NULL,
    "lesseNumber" INTEGER NOT NULL,
    "lesseExperience" INTEGER NOT NULL,
    "lesseID" INTEGER NOT NULL,
    "driverLicense" INTEGER NOT NULL,

    CONSTRAINT "lessee_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lessee_table_lesseNumber_lesseID_driverLicense_key" ON "lessee_table"("lesseNumber", "lesseID", "driverLicense");
