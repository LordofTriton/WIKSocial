import { Expose } from 'class-transformer';

export class UpdateSettingsRequest {
    @Expose()
    settingsId: number;

    @Expose()
    userId: number;

    @Expose()
    emailCommentReplies: boolean;

    @Expose()
    emailCommentMentions: boolean;

    @Expose()
    emailNewPostComment: boolean;

    @Expose()
    emailNewPosts: boolean;

    @Expose()
    emailBestOfTheWeek: boolean;

    @Expose()
    emailPostCommentRatings: boolean;

    @Expose()
    commentReplies: boolean;

    @Expose()
    commentMentions: boolean;

    @Expose()
    newPostComment: boolean;

    @Expose()
    newFollowers: boolean;

    @Expose()
    postCommentRatings: boolean;
}