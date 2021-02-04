import { CreateTagParams, GitFlowHandler } from '@/modules/git-flow/protocols';
import { Branches, GitHub } from '@/infra/github/protocols';

export class Release implements GitFlowHandler {
    private readonly github: GitHub;

    constructor(github: GitHub) {
        this.github = github;
    }

    public async test(): Promise<boolean> {
        const branches = await this.github.getBranches();
        const prefixes = this.github.getPrefixes();
        return branches.current.includes(prefixes.release);
    }

    public async handle(): Promise<string> {
        this.github.getCore().info('RELEASE HANDLER');
        const branches = await this.github.getBranches();
        const prefixes = this.github.getPrefixes();
        const sha = await this.merge(branches);
        await this.github.delete(branches.current);
        await this.createTag({ branches, prefixes, sha });

        return sha;
    }

    private async merge(branches: Branches): Promise<string> {
        await this.github.merge(branches.current, branches.development);
        const sha = await this.github.merge(branches.current, branches.main);

        return sha;
    }

    private async createTag(params: CreateTagParams): Promise<void> {
        const tag = this.getTagName(
            params.branches.current,
            params.prefixes.release,
            params.prefixes.tag,
        );

        this.github.getCore().info(`SHA -------> ${params.sha}`);
        this.github.getCore().info(`TAG -------> ${tag}`);

        await this.github.createTag(tag, params.sha);
    }

    private getTagName(currentBranch: string, releasePrefix: string, tagPrefix: string): string {
        const branchName = currentBranch.split(releasePrefix).join('');
        return `${tagPrefix}${branchName}`;
    }
}
