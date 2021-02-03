import { Branches, GitFlowHandler } from '@protocols';

export class Feature implements GitFlowHandler {
    async handle(branches: Branches): Promise<string> {
        console.log(branches);

        return '';
    }
}
