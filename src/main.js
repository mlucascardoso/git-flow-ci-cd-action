const core = require('@actions/core')
const github = require('@actions/github')

const main = async () => {
    const token = core.getInput('github_token', { required: true })
    const repository = core.getInput('repository')
    const client = github.getOctokit(token)
    console.log(repository);
}

const deleteBranch = async () => { }

main()
    .catch(err => {
        console.error(err);
        console.error(err.stack);
        process.exit(err.code || -1);
    })
