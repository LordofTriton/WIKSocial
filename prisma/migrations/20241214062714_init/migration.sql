/*
  Warnings:

  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileImageId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[coverImageId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exception" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Settings" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "phone",
ADD COLUMN     "coverImageId" INTEGER,
ADD COLUMN     "profileImageId" INTEGER,
ADD COLUMN     "username" VARCHAR(256) NOT NULL,
ADD COLUMN     "verificationCode" TEXT,
ALTER COLUMN "lastLogin" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "lastActive" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- CreateTable
CREATE TABLE "CloudFile" (
    "cloudFileId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "publicId" VARCHAR(256) NOT NULL,
    "uri" VARCHAR(256),
    "fileType" VARCHAR(256) NOT NULL,
    "dateCreated" TEXT NOT NULL DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),

    CONSTRAINT "CloudFile_pkey" PRIMARY KEY ("cloudFileId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_profileImageId_key" ON "User"("profileImageId");

-- CreateIndex
CREATE UNIQUE INDEX "User_coverImageId_key" ON "User"("coverImageId");

-- AddForeignKey
ALTER TABLE "CloudFile" ADD CONSTRAINT "user_profile_image_id" FOREIGN KEY ("cloudFileId") REFERENCES "User"("profileImageId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CloudFile" ADD CONSTRAINT "user_cover_image_id" FOREIGN KEY ("cloudFileId") REFERENCES "User"("coverImageId") ON DELETE RESTRICT ON UPDATE CASCADE;
