import { Expose } from "class-transformer";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Exception {
    @Expose()
    @PrimaryGeneratedColumn()
    exceptionId: number;

    @Expose()
    @Column()
    code: number;

    @Expose()
    @Column()
    action: string;

    @Expose()
    @Column({ length: 256 })
    message: string;

    @Expose()
    @Column({ length: 256 })
    metadata: string;

    @Expose()
    @Column({ default: () => "CURRENT_TIMESTAMP" })
    dateCreated: string;
}