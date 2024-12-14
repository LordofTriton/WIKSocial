import { Expose } from "class-transformer";

export class Exception {
    @Expose()
    exceptionId: number;

    @Expose()
    code: number;

    @Expose()
    action: string;

    @Expose()
    message: string;

    @Expose()
    metadata: string;

    @Expose()
    dateCreated: string;
}