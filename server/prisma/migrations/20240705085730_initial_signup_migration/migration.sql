-- CreateTable
CREATE TABLE "users_table" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lesseID" BIGINT NOT NULL,
    "email" TEXT NOT NULL,
    "driverLicense" BIGINT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_table_lesseID_email_driverLicense_key" ON "users_table"("lesseID", "email", "driverLicense");
