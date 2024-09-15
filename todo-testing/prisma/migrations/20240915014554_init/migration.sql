/*
  Warnings:

  - Added the required column `updatedAt` to the `ToDo` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ToDo_id_key";

-- AlterTable
ALTER TABLE "ToDo" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id");
