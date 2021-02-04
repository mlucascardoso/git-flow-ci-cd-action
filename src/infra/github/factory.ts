import * as client from '@actions/github';
import * as core from '@actions/core';
import { GitHubService } from '@/infra/github/service';
import { GitHub } from '@/infra/github/protocols';

export class GitHubFactory {
    public static assemble(): GitHub {
        return new GitHubService(client, core);
    }
}
