// import { getInput, info } from '@actions/core';
// import { context, getOctokit } from '@actions/github';

// const token = getInput('github_token');
// const client = getOctokit(token);

// interface Branches {
//     current: string;
//     main: string;
//     development: string;
// }

const main = async () => {
    // const branches = getBranches();
    // const gitFlowPrefixes = getPrefixes();
    // if (branches.current.includes(gitFlowPrefixes.feature)) {
    //     await handleFeatureFinish(branches);
    // }
};

// const getBranches = (): Branches => {
//     return {
//         current: getInput('current_branch'),
//         main: getInput('master_branch'),
//         development: getInput('development_branch'),
//     };
// };

// const handleFeatureFinish = async (branches: Branches) => {
//     await merge(branches.current, branches.development);
//     await deleteBranch(branches.current);
// };

// const getPrefixes = () => {
//     return {
//         bugfix: getInput('bugfix_branch_prefix'),
//         feature: getInput('feature_branch_prefix'),
//         hotfix: getInput('hotfix_branch_prefix'),
//         release: getInput('release_branch_prefix'),
//         support: getInput('support_branch_prefix'),
//         tag: getInput('tag_prefix'),
//     };
// };

// const merge = async (currentBranch: string, toBranch: string):
//  Promise<any> => {
//     info(`merge branch "${currentBranch}" to branch "${toBranch}"`);
//     const response = await client.repos.merge({
//         ...context.repo,
//         base: toBranch,
//         head: currentBranch,
//     });

//     const sha = response.data.sha;
//     info(`sha ${sha}`);

//     return sha;
// };

// const deleteBranch = async (currentBranch: string): Promise<void> => {
//     await client.git.deleteRef({
//         owner: context.actor,
//         repo: context.repo.repo,
//         ref: `heads/${currentBranch}`,
//     });
// };

main()
    .catch((err) => {
        console.error(err);
        console.error(err.stack);
        process.exit(err.code || -1);
    });
