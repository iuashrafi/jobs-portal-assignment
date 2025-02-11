/*
  Warnings:

  - Added the required column `location` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salary` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "JobCategory" AS ENUM ('SOFTWARE_ENGINEERING', 'DATA_SCIENCE', 'DESIGN', 'MARKETING', 'PRODUCT_MANAGEMENT');

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "salary" INTEGER NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" "JobCategory" NOT NULL;
