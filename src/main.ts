import { getInput, info } from '@actions/core';
import { context, getOctokit } from '@actions/github';

const main = async () => {
    const token = getInput('github_token', { required: true });
    // const repository = core.getInput('repository')
    const client = getOctokit(token);
    info(`context -> ${context}`);
    info(`client -> ${client.git.getRef}`);

    // await deleteBranch(client);
};

// const deleteBranch = async (client: any) => {
//     // const currentBranch = getInput('current_branch');

//     // const branchToDelete = await client.refs.get({
//     //     ...context.repo,
//     //     pull_number: currentBranch,
//     // });

//     console.log('branchToDelete->', client.refs);
// };

main()
    .catch((err) => {
        console.error(err);
        console.error(err.stack);
        process.exit(err.code || -1);
    });
