export declare class DB<T> {
    private file;
    private tempfile;
    constructor(file: string);
    read(): T | null;
    write(data: T): void;
}
