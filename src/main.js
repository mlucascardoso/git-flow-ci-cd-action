const core = require('@actions/core')
const github = require('@actions/github')

const main = async () => {
    const token = core.getInput('github_token', { required: true })
    // const repository = core.getInput('repository')
    const client = github.getOctokit(token)
    await deleteBranch(client)
}

const deleteBranch = async (client) => {
    const currentBranch = core.getInput('current_branch')
    const branchToDelete = await client.pulls.get({
        ...github.context.repo,
        pull_number: currentBranch,
    })

    console.log('branchToDelete->', branchToDelete);
}

main()
    .catch(err => {
        console.error(err);
        console.error(err.stack);
        process.exit(err.code || -1);
    })
