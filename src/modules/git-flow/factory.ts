import { GitFlowHandler } from '@/modules/git-flow/protocols';
import { GitFlowService } from '@/modules/git-flow/service';
import { BugFix, Feature, HotFix } from '@/modules/git-flow/handlers';
import { GitHubFactory } from '@/infra/github/factory';
import { GitHub } from '@/infra/github/protocols/git-hub';

export class GitFlowFactory {
    private static handlers: GitFlowHandler[];

    public static assemble() {
        const github = GitHubFactory.assemble();
        this.setHandlers(github);
        const handler = this.getHandler();
        return new GitFlowService(handler);
    }

    private static setHandlers(github: GitHub): void {
        this.handlers = [
            new Feature(github),
            new BugFix(github),
            new HotFix(github),
        ];
    }

    private static getHandler(): GitFlowHandler {
        return this.handlers.find(handler => handler.test()) as GitFlowHandler;
    }
}
