export interface GitFlowHandler {
    test(): boolean;
    handle(): Promise<string>;
}
