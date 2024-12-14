-- DropForeignKey
ALTER TABLE "CloudFile" DROP CONSTRAINT "user_cover_image_id";

-- DropForeignKey
ALTER TABLE "CloudFile" DROP CONSTRAINT "user_profile_image_id";

-- AlterTable
ALTER TABLE "CloudFile" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Exception" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "Settings" ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "lastLogin" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "lastActive" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),
ALTER COLUMN "dateCreated" SET DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS');

-- CreateTable
CREATE TABLE "Notion" (
    "notionId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "referenceId" INTEGER NOT NULL,
    "isSubscribed" BOOLEAN NOT NULL DEFAULT false,
    "isHidden" BOOLEAN NOT NULL DEFAULT false,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TEXT NOT NULL DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),

    CONSTRAINT "Notion_pkey" PRIMARY KEY ("notionId")
);

-- CreateTable
CREATE TABLE "Post" (
    "postId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "communityId" INTEGER,
    "sharedPostId" INTEGER,
    "textContent" TEXT NOT NULL,
    "linkContent" TEXT NOT NULL,
    "mediaContentIds" TEXT[],
    "dateCreated" TEXT NOT NULL DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "Community" (
    "communityId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "profileImageId" INTEGER,
    "coverImageId" INTEGER,
    "description" TEXT NOT NULL,
    "status" VARCHAR(256) NOT NULL DEFAULT 'ACTIVE',
    "dateCreated" TEXT NOT NULL DEFAULT to_char(current_timestamp, 'YYYY-MM-DD HH24:MI:SS.MS'),

    CONSTRAINT "Community_pkey" PRIMARY KEY ("communityId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Community_profileImageId_key" ON "Community"("profileImageId");

-- CreateIndex
CREATE UNIQUE INDEX "Community_coverImageId_key" ON "Community"("coverImageId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileImageId_fkey" FOREIGN KEY ("profileImageId") REFERENCES "CloudFile"("cloudFileId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_coverImageId_fkey" FOREIGN KEY ("coverImageId") REFERENCES "CloudFile"("cloudFileId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notion" ADD CONSTRAINT "Notion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("communityId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_sharedPostId_fkey" FOREIGN KEY ("sharedPostId") REFERENCES "Post"("postId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_profileImageId_fkey" FOREIGN KEY ("profileImageId") REFERENCES "CloudFile"("cloudFileId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_coverImageId_fkey" FOREIGN KEY ("coverImageId") REFERENCES "CloudFile"("cloudFileId") ON DELETE SET NULL ON UPDATE CASCADE;
