import { Expose } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany, type Relation, BeforeInsert, BeforeUpdate } from "typeorm";
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
    @Column({ nullable: true })
    communityId: number;

    @Expose()
    @Column({ nullable: true })
    sharedPostId: number;

    @Expose()
    @Column({ unique: true, length: 256 })
    pid: string;

    @Expose()
    @Column()
    content: string;

    @Expose()
    @Column({ default: false })
    sensitiveContent: boolean;

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
    @JoinColumn({ name: "sharedPostId", referencedColumnName: "postId", foreignKeyConstraintName: "Post.SharedPost" })
    sharedPost: Relation<Post>;

    @OneToOne(() => User, { nullable: true })
    @JoinColumn({ name: "userId", referencedColumnName: "userId", foreignKeyConstraintName: "Post.Author" })
    author: Relation<User>;

    @OneToOne(() => Community, { nullable: true })
    @JoinColumn({ name: "communityId", referencedColumnName: "communityId", foreignKeyConstraintName: "Post.Community" })
    community: Relation<Community>;

    // Hooks
  
    @BeforeInsert()
    @BeforeUpdate()
    updatePID() { this.pid = `p.${this.postId}`; }
}