-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "adresa" DROP NOT NULL,
ALTER COLUMN "drzava" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "fax" DROP NOT NULL,
ALTER COLUMN "telefon" DROP NOT NULL,
ALTER COLUMN "valuta" DROP NOT NULL,
ALTER COLUMN "web" DROP NOT NULL,
ALTER COLUMN "IDbroj" DROP NOT NULL,
ALTER COLUMN "PDVbroj" DROP NOT NULL,
ALTER COLUMN "obveznikPDV" DROP NOT NULL;
