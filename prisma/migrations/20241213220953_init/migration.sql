-- AlterTable
ALTER TABLE "Exception" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "dateCreated" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "dateCreated" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Settings" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "dateCreated" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "lastLogin" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "lastLogin" SET DATA TYPE TEXT,
ALTER COLUMN "lastActive" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "lastActive" SET DATA TYPE TEXT,
ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "dateCreated" SET DATA TYPE TEXT;
