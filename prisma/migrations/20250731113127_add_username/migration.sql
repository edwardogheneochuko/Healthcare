/*
  Warnings:

  - You are about to drop the column `Name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `UserName` on the `user` table. All the data in the column will be lost.
  - Added the required column `userName` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "Name",
DROP COLUMN "UserName",
ADD COLUMN     "userName" TEXT NOT NULL;
