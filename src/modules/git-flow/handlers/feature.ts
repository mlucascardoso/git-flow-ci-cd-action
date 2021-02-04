import { GitFlowHandler } from '@/modules/git-flow/protocols';
import { GitHub } from '@/infra/github/protocols';

export class Feature implements GitFlowHandler {
    private readonly github: GitHub;

    constructor(github: GitHub) {
        this.github = github;
    }

    public async test(): Promise<boolean> {
        const branches = await this.github.getBranches();
        const prefixes = this.github.getPrefixes();
        return branches.current.includes(prefixes.feature);
    }

    async handle(): Promise<string> {
        this.github.getCore().info('FEATURE HANDLER');
        const branches = await this.github.getBranches();
        const sha = await this.github.merge(branches.current, branches.development);
        await this.github.delete(branches.current);

        return sha;
    }
}
