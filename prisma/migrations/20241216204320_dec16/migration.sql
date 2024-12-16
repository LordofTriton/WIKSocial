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
ALTER TABLE "Settings" ADD COLUMN     "darkMode" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "lastLogin" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "lastActive" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');
