-- AlterTable
ALTER TABLE "User" ALTER COLUMN "phone" SET DATA TYPE TEXT,
ALTER COLUMN "password" SET DATA TYPE TEXT,
ALTER COLUMN "accessCode" SET DATA TYPE TEXT,
ALTER COLUMN "resetCode" SET DATA TYPE TEXT,
ALTER COLUMN "lastLogin" SET DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::bigint,
ALTER COLUMN "lastActive" SET DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::bigint,
ALTER COLUMN "dateCreated" SET DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::bigint;

-- CreateTable
CREATE TABLE "Notification" (
    "notificationId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" VARCHAR(256) NOT NULL,
    "notificationType" TEXT NOT NULL,
    "referenceId" TEXT,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" BIGINT NOT NULL DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::bigint,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("notificationId")
);

-- CreateTable
CREATE TABLE "Exception" (
    "exceptionId" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "message" VARCHAR(256) NOT NULL,
    "metadata" VARCHAR(256),
    "dateCreated" BIGINT NOT NULL DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::bigint,

    CONSTRAINT "Exception_pkey" PRIMARY KEY ("exceptionId")
);

-- CreateTable
CREATE TABLE "Settings" (
    "settingsId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "emailCommentReplies" BOOLEAN NOT NULL DEFAULT true,
    "emailCommentMentions" BOOLEAN NOT NULL DEFAULT true,
    "emailNewPostComment" BOOLEAN NOT NULL DEFAULT true,
    "emailNewPosts" BOOLEAN NOT NULL DEFAULT true,
    "emailBestOfTheWeek" BOOLEAN NOT NULL DEFAULT false,
    "emailPostCommentRatings" BOOLEAN NOT NULL DEFAULT true,
    "commentReplies" BOOLEAN NOT NULL DEFAULT true,
    "commentMentions" BOOLEAN NOT NULL DEFAULT true,
    "newPostComment" BOOLEAN NOT NULL DEFAULT true,
    "newFollowers" BOOLEAN NOT NULL DEFAULT true,
    "postCommentRatings" BOOLEAN NOT NULL DEFAULT true,
    "dateCreated" BIGINT NOT NULL DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::bigint,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("settingsId")
);
