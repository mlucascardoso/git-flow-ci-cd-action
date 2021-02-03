// export class Git {
//     public async merge(currentBranch: string, toBranch: string):
// Promise<string> {
//         info(`merge branch "${currentBranch}" to branch "${toBranch}"`);
//         const response = await client.repos.merge({
//             ...context.repo,
//             base: toBranch,
//             head: currentBranch,
//         });

//         const sha = response.data.sha;
//         info(`sha ${sha}`);

//         return sha;
//     }

//     public async delete(currentBranch: string): Promise<void> {
//         await client.git.deleteRef({
//             owner: context.actor,
//             repo: context.repo.repo,
//             ref: `heads/${currentBranch}`,
//         });
//     }
// }
