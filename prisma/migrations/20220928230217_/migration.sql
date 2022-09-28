/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Reservation_restaurantId_key";

-- DropIndex
DROP INDEX "Reservation_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_id_key" ON "Restaurant"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
