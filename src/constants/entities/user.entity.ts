import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToMany, OneToOne, type Relation, BeforeInsert, BeforeUpdate } from "typeorm";
import { Expose } from 'class-transformer';
import { CloudFile } from "../entities/cloudFile.entity";
import { Notion } from "./notion.entity";
import { Post } from "./post.entity";
import { Settings } from "./settings.entity";
import { Notification } from "./notification.entity";

@Entity()
export class User {
  @Expose()
  @PrimaryGeneratedColumn()
  userId: number;

  @Expose()
  @Column({ length: 256 })
  username: string;

  @Expose()
  @Column({ unique: true, length: 256 })
  uid: string;

  @Expose()
  @Column({ nullable: true, unique: true })
  profileImageId: number;

  @Expose()
  @Column({ nullable: true, unique: true })
  coverImageId: number;

  @Expose()
  @Column({ unique: true, length: 256 })
  email: string;

  @Expose()
  @Column({ length: 256, default: "I am a human :D" })
  bio: string;

  @Column()
  password: string;

  @Expose()
  @Column({ length: 256, default: "BASIC" })
  userType: string;

  @Expose()
  @Column({ length: 256, default: "INACTIVE" })
  userStatus: string;

  @Expose()
  @Column({ default: 0 })
  rating: number;

  @Expose()
  @Column({ default: false })
  isSetupComplete: boolean;

  @Column({ nullable: true })
  verificationCode: string;

  @Column({ nullable: true })
  accessCode: string;

  @Column({ nullable: true })
  resetCode: string;
  
  @Expose()
  @Column({ nullable: true, unique: true })
  googleId: string;
  
  @Expose()
  @Column({ nullable: true, unique: true })
  yandexId: string;
  
  @Expose()
  @Column({ nullable: true, unique: true })
  vkontakteId: string;
  
  @Expose()
  @Column({ default: () => "CURRENT_TIMESTAMP" })
  lastLogin: string;
  
  @Expose()
  @Column({ default: () => "CURRENT_TIMESTAMP" })
  lastActive: string;
  
  @Expose()
  @Column({ default: () => "CURRENT_TIMESTAMP" })
  dateCreated: string;

  // Relations

  @Expose()
  @OneToOne(() => Settings, (settings) => settings.user)
  settings: Relation<Settings>;

  @Expose()
  @OneToMany(() => Notification, (notification) => notification.referenceUser)
  @JoinColumn({ name: "userId", referencedColumnName: "userId", foreignKeyConstraintName: "User.Notifications" })
  notifications: Relation<Notification>[];

  @Expose()
  @OneToMany(() => Post, (post) => post.author)
  @JoinColumn({ name: "userId", referencedColumnName: "userId", foreignKeyConstraintName: "User.Posts" })
  posts: Relation<Post>[];

  @Expose()
  @OneToMany(() => Notion, (notion) => notion.referenceUser)
  @JoinColumn({ name: "userId", referencedColumnName: "userId", foreignKeyConstraintName: "User.Notions" })
  notions: Relation<Notion>[];

  @Expose()
  @OneToOne(() => CloudFile, { nullable: true })
  @JoinColumn({ name: "profileImageId", referencedColumnName: "cloudFileId", foreignKeyConstraintName: "User.ProfileImage" })
  profileImage?: Relation<CloudFile>;

  @Expose()
  @OneToOne(() => CloudFile, { nullable: true })
  @JoinColumn({ name: "coverImageId", referencedColumnName: "cloudFileId", foreignKeyConstraintName: "User.CoverImage" })
  coverImage?: Relation<CloudFile>;

  // Hooks

  @BeforeInsert()
  @BeforeUpdate()
  updateUID() { this.uid = `u.${this.userId}.${this.username.toLowerCase().replaceAll("", "-")}`; }
}
