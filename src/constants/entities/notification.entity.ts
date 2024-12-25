import { Expose } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne, type Relation } from "typeorm";
import { Post } from './post.entity';
import { User } from './user.entity';
import { Community } from './community.entity';

@Entity()
export class Notification {
    @Expose()
    @PrimaryGeneratedColumn()
    notificationId: number;

    @Expose()
    @Column()
    userId: number;

    @Expose()
    @Column({ length: 256 })
    title: string;

    @Expose()
    @Column({ length: 256 })
    content: string;

    @Expose()
    @Column()
    notificationType: string;

    @Expose()
    @Column()
    referenceId: number;

    @Expose()
    @Column({ default: false })
    isRead: boolean;

    @Expose()
    @Column({ default: () => "CURRENT_TIMESTAMP" })
    dateCreated: string;

    // Relations

    @OneToOne(() => Post, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "postId", foreignKeyConstraintName: "Notification.Post" })
    referencePost: Relation<Post>;

    @OneToOne(() => User, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "userId", foreignKeyConstraintName: "Notification.User" })
    referenceUser: Relation<User>;

    @OneToOne(() => Community, { nullable: true })
    @JoinColumn({ name: "referenceId", referencedColumnName: "communityId", foreignKeyConstraintName: "Notification.Community" })
    referenceCommunity: Relation<Community>;
}