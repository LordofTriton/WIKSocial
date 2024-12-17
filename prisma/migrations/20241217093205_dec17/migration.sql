/*
  Warnings:

  - A unique constraint covering the columns `[googleId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[yandexId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[vkontakteId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CloudFile" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Community" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Exception" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Notion" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Settings" ADD COLUMN     "blurSensitiveContent" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "feedSort" TEXT NOT NULL DEFAULT 'DATE',
ADD COLUMN     "homeDefault" TEXT NOT NULL DEFAULT 'POPULAR',
ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" VARCHAR(256) NOT NULL DEFAULT 'I am a human :D',
ADD COLUMN     "googleId" TEXT,
ADD COLUMN     "vkontakteId" TEXT,
ADD COLUMN     "yandexId" TEXT,
ALTER COLUMN "lastLogin" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "lastActive" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "User_yandexId_key" ON "User"("yandexId");

-- CreateIndex
CREATE UNIQUE INDEX "User_vkontakteId_key" ON "User"("vkontakteId");
