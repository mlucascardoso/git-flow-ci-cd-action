import { GitFlowBranchesPrefixes } from '@/modules/git-flow/protocols';
import { Branches } from '@/infra/github/protocols';
import { Core } from './core';

export interface GitHub {
    getBranches(): Branches;
    getCore(): Core;
    getPrefixes(): GitFlowBranchesPrefixes;
    merge(fromBranch: string, toBranch: string): Promise<string>;
    delete(currentBranch: string): Promise<void>;
}
