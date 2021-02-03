import { GitFlowHandler } from '@/modules/git-flow/protocols';
import { GitHub } from '@/infra/github/protocols';

export class HotFix implements GitFlowHandler {
    private readonly github: GitHub;

    constructor(github: GitHub) {
        this.github = github;
    }

    test(): boolean {
        const branches = this.github.getBranches();
        const prefixes = this.github.getPrefixes();
        return branches.current.includes(prefixes.hotfix);
    }

    public async handle(): Promise<string> {
        const branches = this.github.getBranches();
        const prefixes = this.github.getPrefixes();
        const tagName = this.getTagName(branches.current, prefixes.hotfix, prefixes.tag);
        const sha = await this.github.merge(branches.current, branches.main);
        await this.github.merge(branches.current, branches.development);
        await this.github.delete(branches.current);
        await this.github.createTag(tagName, sha);

        return sha;
    }

    private getTagName(currentBranch: string, hotfixPrefix: string, tagPrefix: string): string {
        const branchName = currentBranch.split(hotfixPrefix);
        return `${tagPrefix}${branchName}`;
    }
}
