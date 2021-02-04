import { Branches } from '@/infra/github/protocols';
import { GitFlowBranchesPrefixes } from './branches-prefixes';

export interface CreateTagParams {
    branches: Branches;
    prefixes: GitFlowBranchesPrefixes;
    sha: string
}
