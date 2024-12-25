import { Expose } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany, type Relation } from "typeorm";
import { User } from "./user.entity";
import { Community } from "./community.entity";
import { Comment } from "./comment.entity";
import { Reaction } from "./reaction.entity";

@Entity()
export class Post {
    @Expose()
    @PrimaryGeneratedColumn()
    postId: number;

    @Expose()
    @Column()
    userId: number;

    @Expose()
    @Column()
    communityId: number;

    @Expose()
    @Column()
    sharedPostId: number;

    @Expose()
    @Column()
    content: string;

    @Expose()
    @Column({ default: () => "CURRENT_TIMESTAMP" })
    dateCreated: string;

    // Relations

    @OneToMany(() => Comment, (comment) => comment.post)
    @JoinColumn({ name: "postId", referencedColumnName: "postId", foreignKeyConstraintName: "Post.Comments" })
    comments: Relation<Comment>[];

    @OneToMany(() => Reaction, (reaction) => reaction.referencePost)
    @JoinColumn({ name: "postId", referencedColumnName: "referenceId", foreignKeyConstraintName: "Post.Reactions" })
    reactions: Relation<Reaction>[];
       
    @OneToOne(() => Post, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "postId", foreignKeyConstraintName: "Post.SharedPost" })
    sharedPost: Relation<Post>;

    @OneToOne(() => User, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "userId", foreignKeyConstraintName: "Post.Author" })
    author: Relation<User>;

    @OneToOne(() => Community, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "communityId", foreignKeyConstraintName: "Post.Community" })
    community: Relation<Community>;
}