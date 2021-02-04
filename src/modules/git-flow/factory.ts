import { GitFlowHandler } from '@/modules/git-flow/protocols';
import { GitFlowService } from '@/modules/git-flow/service';
import { BugFix, Feature, HotFix, Release } from '@/modules/git-flow/handlers';
import { GitHubFactory } from '@/infra/github/factory';
import { GitHub } from '@/infra/github/protocols/git-hub';

export class GitFlowFactory {
    private static handlers: GitFlowHandler[];

    public static async assemble() {
        const github = GitHubFactory.assemble();
        this.setHandlers(github);
        const handler = await this.getHandler();
        return new GitFlowService(handler);
    }

    private static setHandlers(github: GitHub): void {
        this.handlers = [
            new BugFix(github),
            new Feature(github),
            new HotFix(github),
            new Release(github),
        ];
    }

    private static async getHandler(): Promise<GitFlowHandler> {
        let handler = undefined;

        for (const gitFlowHandler of this.handlers) {
            const isValid = await gitFlowHandler.test();
            if (isValid) {
                handler = gitFlowHandler;
            }
        }

        return handler as GitFlowHandler;
    }
}
