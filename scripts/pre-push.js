const { execSync } = require('child_process');

execSync('npm run build');
execSync(`git add ./dist/`);

try {
    const lastCommitMessage = execSync('git log -1 --oneline').toString();
    const msg = lastCommitMessage.split(': ')[1].replace('\n', '');
    const commitMessage = `build: ${msg}`;
    execSync(`git commit -m "${commitMessage}" --no-verify`);
} catch (error) {
    console.warn('Nothing to commit');
}
