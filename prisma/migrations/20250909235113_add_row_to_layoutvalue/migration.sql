/*
  Warnings:

  - A unique constraint covering the columns `[fileId,fieldId,row]` on the table `LayoutValue` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `row` to the `LayoutValue` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."LayoutValue_fileId_fieldId_key";

-- AlterTable
ALTER TABLE "public"."LayoutValue" ADD COLUMN     "row" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "LayoutValue_fileId_fieldId_row_key" ON "public"."LayoutValue"("fileId", "fieldId", "row");
