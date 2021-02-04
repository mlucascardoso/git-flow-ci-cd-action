import { GitFlowBranchesPrefixes } from '@/modules/git-flow/protocols';
import { Branches } from '@/infra/github/protocols';
import { Core } from './core';

export interface GitHub {
    getBranches(): Promise<Branches>;
    getCore(): Core;
    getPrefixes(): GitFlowBranchesPrefixes;
    merge(fromBranch: string, toBranch: string): Promise<string>;
    delete(currentBranch: string): Promise<void>;
    createTag(tag: string, sha: string): Promise<void>;
}
