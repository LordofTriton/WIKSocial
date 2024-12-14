export type SchemaKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

export type SchemaProps<T> = Pick<T, SchemaKeys<T>>;