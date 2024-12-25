import { Expose } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, type Relation, JoinColumn, OneToOne } from "typeorm";
import { User } from './user.entity';

@Entity()
export class Settings {
    @Expose()
    @PrimaryGeneratedColumn()
    settingsId: number;

    @Expose()
    @Column({ unique: true })
    userId: number;

    @Expose()
    @Column({ default: true })
    emailCommentReplies: boolean;

    @Expose()
    @Column({ default: true })
    emailCommentMentions: boolean;

    @Expose()
    @Column({ default: true })
    emailNewPostComment: boolean;

    @Expose()
    @Column({ default: true })
    emailNewPosts: boolean;

    @Expose()
    @Column({ default: false })
    emailBestOfTheWeek: boolean;

    @Expose()
    @Column({ default: true })
    emailPostCommentRatings: boolean;

    @Expose()
    @Column({ default: true })
    commentReplies: boolean;

    @Expose()
    @Column({ default: true })
    commentMentions: boolean;

    @Expose()
    @Column({ default: true })
    newPostComment: boolean;

    @Expose()
    @Column({ default: true })
    newFollowers: boolean;

    @Expose()
    @Column({ default: true })
    postCommentRatings: boolean;

    @Expose()
    @Column({ default: false })
    darkMode: boolean;

    @Expose()
    @Column({ length: 256, default: "POPULAR" })
    homeDefault: string;

    @Expose()
    @Column({ length: 256, default: "DATE" })
    feedSort: string;

    @Expose()
    @Column({ default: true })
    blurSensitiveContent: boolean;

    // Relations

    @OneToOne(() => User, { nullable: true })
    @JoinColumn({ name: "userId", referencedColumnName: "userId", foreignKeyConstraintName: "Settings.User" })
    user: Relation<User>;
}