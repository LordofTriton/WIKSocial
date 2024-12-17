import { instanceToPlain, plainToInstance, ClassConstructor } from 'class-transformer';

export class WikMapper {
    
    static map<T>(data: any, klass: ClassConstructor<T>, toPlain: boolean = false): T {
        if (!data) throw new Error("Invalid map data.");
        
        const mapped = plainToInstance(klass, data, { excludeExtraneousValues: true })

        for (let key of Object.keys(mapped)) {
            if (mapped[key] === undefined) delete mapped[key];
        }

        return toPlain ? this.toObject(mapped) as T : mapped;
    }

    static toObject(data: any) {
        return instanceToPlain(data);
    }
}