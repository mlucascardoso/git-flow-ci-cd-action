export interface Core {
    getInput(name: string, options?: any): string;
    info(message: string): void;
}
