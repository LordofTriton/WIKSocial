/*
  Warnings:

  - The primary key for the `Settings` table will be changed. If it partially fails, the table could be left without primary key constraint.

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
ALTER TABLE "Settings" DROP CONSTRAINT "Settings_pkey",
ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ADD CONSTRAINT "Settings_pkey" PRIMARY KEY ("userId");

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "lastLogin" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "lastActive" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');
