#!/bin/sh
set -e

remote_repo="https://${GITHUB_ACTOR}:${INPUT_GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

# Feature finish
if [[ -z "${INPUT_CURRENT_BRANCH##*$INPUT_FEATURE_BRANCH_PREFIX*}" ]] ;then
    # git push "${remote_repo}" HEAD:${INPUT_DEVELOPMENT_BRANCH} --follow-tags;
    # git remote -v 
    # git branch -a
    # git branch -D remotes/origin/${INPUT_CURRENT_BRANCH}
    # git push origin :${INPUT_CURRENT_BRANCH}
    git push "${remote_repo}" HEAD:":${INPUT_CURRENT_BRANCH}" --force;
    echo "feature"
elif [[ -z "${INPUT_CURRENT_BRANCH##*$INPUT_BUGFIX_BRANCH_PREFIX*}" ]] ;then
    echo "bugfix"
elif [[ -z "${INPUT_CURRENT_BRANCH##*$INPUT_RELEASE_BRANCH_PREFIX*}" ]] ;then
    echo "release"
elif [[ -z "${INPUT_CURRENT_BRANCH##*$INPUT_HOTFIX_BRANCH_PREFIX*}" ]] ;then
    echo "hotfix"
elif [[ -z "${INPUT_CURRENT_BRANCH##*$INPUT_SUPPORT_BRANCH_PREFIX*}" ]] ;then
    echo "support"
fi

