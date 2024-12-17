import { Expose } from 'class-transformer';

export class UpdateSettingsRequest {
    userId: number;

    @Expose()
    emailCommentReplies?: boolean;

    @Expose()
    emailCommentMentions?: boolean;

    @Expose()
    emailNewPostComment?: boolean;

    @Expose()
    emailNewPosts?: boolean;

    @Expose()
    emailBestOfTheWeek?: boolean;

    @Expose()
    emailPostCommentRatings?: boolean;

    @Expose()
    commentReplies?: boolean;

    @Expose()
    commentMentions?: boolean;

    @Expose()
    newPostComment?: boolean;

    @Expose()
    newFollowers?: boolean;

    @Expose()
    postCommentRatings?: boolean;

    @Expose()
    darkMode: boolean;

    @Expose()
    homeDefault: string;

    @Expose()
    feedSort: string;

    @Expose()
    blurSensitiveContent: boolean;
}