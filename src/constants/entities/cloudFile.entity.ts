import { Expose } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CloudFile {
    @Expose()
    @PrimaryGeneratedColumn()
    cloudFileId: number;

    @Expose()
    @Column()
    userId: number;

    @Expose()
    @Column()
    uri: string;

    @Expose()
    @Column()
    fileType: string;

    @Expose()
    @Column({ default: () => "CURRENT_TIMESTAMP" })
    dateCreated: string;
}