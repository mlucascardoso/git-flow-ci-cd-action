import { Branches, GitFlowHandler } from '@protocols';

export class GitFlow {
    private readonly handler: GitFlowHandler;

    constructor(handler: GitFlowHandler) {
        this.handler = handler;
    }

    public async handle(branches: Branches): Promise<string> {
        return this.handler.handle(branches);
    }
}
