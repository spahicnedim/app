/*
  Warnings:

  - You are about to alter the column `sifra` on the `Djelatnost` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Djelatnost" ALTER COLUMN "sifra" SET DATA TYPE DECIMAL(10,2);
