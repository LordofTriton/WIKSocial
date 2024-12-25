import { Expose } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany, type Relation, BeforeInsert, BeforeUpdate } from "typeorm";
import { CloudFile } from "../entities/cloudFile.entity";
import { Post } from "./post.entity";
import { CommunityStatusEnum } from "../enums/community.enums";
import { Comment } from "./comment.entity";

@Entity()
export class Community {
    @Expose()
    @PrimaryGeneratedColumn()
    communityId: number;

    @Expose()
    @Column({ length: 256 })
    name: string;

    @Expose()
    @Column({ unique: true, length: 256 })
    cid: string;

    @Expose()
    @Column()
    profileImageId: number;
  
    @Expose()
    @Column()
    coverImageId: number;

    @Expose()
    @Column({ length: 256 })
    description: string;

    @Expose()
    @Column({ default: CommunityStatusEnum.ACTIVE })
    status: string;

    @Expose()
    @Column({ default: () => "CURRENT_TIMESTAMP" })
    dateCreated: string;

    // Relations

    @OneToOne(() => CloudFile, { nullable: true })
    @JoinColumn({ name: "profileImageId", referencedColumnName: "cloudFileId", foreignKeyConstraintName: "Community.ProfileImage" })
    profileImage?: Relation<CloudFile>;
  
    @OneToOne(() => CloudFile, { nullable: true })
    @JoinColumn({ name: "coverImageId", referencedColumnName: "cloudFileId", foreignKeyConstraintName: "Community.CoverImage" })
    coverImage?: Relation<CloudFile>;

    @OneToMany(() => Post, (post) => post.community)
    @JoinColumn({ name: "communityId", referencedColumnName: "communityId", foreignKeyConstraintName: "Community.Posts" })
    posts: Relation<Post>[];

    @OneToMany(() => Comment, (comment) => comment.community)
    @JoinColumn({ name: "communityId", referencedColumnName: "communityId", foreignKeyConstraintName: "Community.Comments" })
    comments: Relation<Comment>[];

    // Hooks
  
    @BeforeInsert()
    @BeforeUpdate()
    updateCID() { this.cid = `c.${this.communityId}.${this.name.toLowerCase().replaceAll("", "-")}`; }
}