export interface GitFlowHandler {
    test(): Promise<boolean>;
    handle(): Promise<string>;
}
