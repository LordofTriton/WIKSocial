import { Expose } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany, type Relation } from "typeorm";
import { User } from "./user.entity";
import { Community } from "./community.entity";
import { Post } from "./post.entity";
import { Reaction } from "./reaction.entity";

@Entity()
export class Comment {
    @Expose()
    @PrimaryGeneratedColumn()
    commentId: number;

    @Expose()
    @Column()
    userId: number;

    @Expose()
    @Column()
    postId: number;

    @Expose()
    @Column({ nullable: true })
    communityId: number;

    @Expose()
    @Column()
    contentText: string;

    @Expose()
    @Column()
    contentMedia: string;

    @Expose()
    @Column({ default: () => "CURRENT_TIMESTAMP" })
    dateCreated: string;

    // Relations

    @OneToOne(() => User, { nullable: true })
    @JoinColumn({ name: "userId", referencedColumnName: "userId", foreignKeyConstraintName: "Comment.User" })
    user: Relation<User>;

    @OneToOne(() => Post, { nullable: true })
    @JoinColumn({ name: "postId", referencedColumnName: "postId", foreignKeyConstraintName: "Comment.Post" })
    post: Relation<Post>;

    @OneToOne(() => Community, { nullable: true })
    @JoinColumn({ name: "communityId", referencedColumnName: "communityId", foreignKeyConstraintName: "Comment.Community" })
    community: Relation<Community>;

    @OneToMany(() => Reaction, (reaction) => reaction.referenceComment)
    @JoinColumn({ name: "commentId", referencedColumnName: "referenceId", foreignKeyConstraintName: "Comment.Reactions" })
    reactions: Relation<Reaction>[];
}