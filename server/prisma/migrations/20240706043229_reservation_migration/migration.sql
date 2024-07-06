-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "location2" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "date2" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);
