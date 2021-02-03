import { GitFlowHandler } from '@/modules/git-flow/protocols';

export class GitFlowService {
    private readonly handler: GitFlowHandler;

    constructor(handler: GitFlowHandler) {
        this.handler = handler;
    }

    public async handle(): Promise<string> {
        return this.handler.handle();
    }
}
