import { GitFlowHandler } from '@/modules/git-flow/protocols';
import { GitHub } from '@/infra/github/protocols';

export class Feature implements GitFlowHandler {
    private readonly github: GitHub;

    constructor(github: GitHub) {
        this.github = github;
    }

    test(): boolean {
        const branches = this.github.getBranches();
        const prefixes = this.github.getPrefixes();
        return branches.current.includes(prefixes.bugfix);
    }

    async handle(): Promise<string> {
        const branches = this.github.getBranches();
        const sha = await this.github.merge(branches.current, branches.development);
        await this.github.delete(branches.current);

        return sha;
    }
}
