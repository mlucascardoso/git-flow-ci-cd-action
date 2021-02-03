import { Branches } from '@protocols/git';

export interface GitFlowHandler {
    handle(branches: Branches): Promise<string>;
}
