import 'reflect-metadata';

import { DataSource, Repository } from "typeorm";

import { User } from '../constants/entities/user.entity';
import { Community } from '../constants/entities/community.entity';
import { Post } from '../constants/entities/post.entity';
import { Reaction } from '../constants/entities/reaction.entity';
import { Notion } from '../constants/entities/notion.entity';
import { Comment } from '../constants/entities/comment.entity';
import { CloudFile } from '../constants/entities/cloudFile.entity';
import { Notification } from '../constants/entities/notification.entity';
import { Settings } from '../constants/entities/settings.entity';
import { Exception } from '../constants/entities/exception.entity';

class Database {
    public static dataSource: DataSource;

    public static User: Repository<User>;
    public static Community: Repository<Community>;
    public static Post: Repository<Post>;
    public static Reaction: Repository<Reaction>;
    public static Notion: Repository<Notion>;
    public static Comment: Repository<Comment>;
    public static CloudFile: Repository<CloudFile>;
    public static Notification: Repository<Notification>;
    public static Settings: Repository<Settings>;
    public static Exception: Repository<Exception>;

    public static async initialize(): Promise<void> {
        if (!this.dataSource) {
            console.log("Connecting to database...");

            this.dataSource = new DataSource({
                applicationName: "wiksocial",
                type: "postgres",
                url: process.env.POSTGRESQL_DB_URL,
                port: 5432,
                synchronize: true,
                logging: false,
                entities: [ User, Community, Post, Reaction, Notion, Comment, CloudFile, Notification, Settings, Exception ],
                migrations: ["src/orm/migrations/**/*.ts"],
                subscribers: ["src/orm/subscribers/**/*.ts"],
                ssl: true
            });
        }

        if (!this.dataSource.isInitialized) {
            console.log("Initializing database...");

            await this.dataSource.initialize();
        
            if (this.dataSource.isInitialized) {
                console.log("Database initialized!");

                this.User = this.dataSource.getRepository(User);
                this.Community = this.dataSource.getRepository(Community);
                this.Post = this.dataSource.getRepository(Post);
                this.Reaction = this.dataSource.getRepository(Reaction);
                this.Notion = this.dataSource.getRepository(Notion);
                this.Comment = this.dataSource.getRepository(Comment);
                this.CloudFile = this.dataSource.getRepository(CloudFile);
                this.Notification = this.dataSource.getRepository(Notification);
                this.Settings = this.dataSource.getRepository(Settings);
                this.Exception = this.dataSource.getRepository(Exception);
            }
            else {
                console.error("Failed to initialize database");
            }
        }
    }

    public static getRepository<T>(entity: { new(): T }): Repository<T> {
        if (!this.dataSource.isInitialized) {
            throw new Error("Database is not initialized.");
        }
        return this.dataSource.getRepository(entity);
    }
}

export default Database;