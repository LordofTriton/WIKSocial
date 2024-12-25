import { Expose } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, type Relation } from "typeorm";
import { User } from "./user.entity";
import { Community } from "./community.entity";
import { Post } from "./post.entity";

@Entity()
export class Notion {
    @Expose()
    @PrimaryGeneratedColumn()
    notionId: number;

    @Expose()
    @Column()
    userId: number;

    @Expose()
    @Column()
    referenceId: number;

    @Expose()
    @Column({ default: false })
    isSubscribed: boolean;

    @Expose()
    @Column({ default: false })
    isHidden: boolean;

    @Expose()
    @Column({ default: false })
    isBlocked: boolean;

    @Expose()
    @Column({ default: () => "CURRENT_TIMESTAMP" })
    dateCreated: string;

    // Relations

    @OneToOne(() => Post, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "postId", foreignKeyConstraintName: "Notion.Post" })
    referencePost: Relation<Post>;

    @OneToOne(() => User, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "userId", foreignKeyConstraintName: "Notion.User" })
    referenceUser: Relation<User>;

    @OneToOne(() => Community, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "communityId", foreignKeyConstraintName: "Notion.Community" })
    referenceCommunity: Relation<Community>;
}