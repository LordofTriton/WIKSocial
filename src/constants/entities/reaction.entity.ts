import { Expose } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, type Relation } from "typeorm";
import { Post } from "./post.entity";
import { ReactionTypeEnum } from "../enums/reaction.enums";
import { Comment } from "./comment.entity";

@Entity()
export class Reaction {
    @Expose()
    @PrimaryGeneratedColumn()
    reactionId: number;

    @Expose()
    @Column()
    userId: number;

    @Expose()
    @Column()
    referenceId: number;

    @Expose()
    @Column({ default: ReactionTypeEnum.THUMBS_UP })
    reactionType: string;

    @Expose()
    @Column({ default: () => "CURRENT_TIMESTAMP" })
    dateCreated: string;

    // Relations

    @OneToOne(() => Post, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "postId", foreignKeyConstraintName: "Reaction.Post" })
    referencePost: Relation<Post>;

    @OneToOne(() => Comment, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "commentId", foreignKeyConstraintName: "Reaction.Comment" })
    referenceComment: Relation<Comment>;
}