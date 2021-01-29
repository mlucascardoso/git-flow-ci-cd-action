#!/bin/sh
set -e

# git credentials
# email=$INPUT_EMAIL
# name=$INPUT_NAME
# password=$INPUT_PASSWORD
# username=$INPUT_USERNAME

# git config user.email "$email"
# git config user.name "$name"
# git config user.password "$password"
# git config credential.username "$username"
# git config credential.password "$username"

remote_repo="https://${GITHUB_ACTOR}:${INPUT_GITHUB_TOKEN}@github.com/${REPOSITORY}.git"

# git push "${remote_repo}" HEAD:${INPUT_BRANCH} --follow-tags $_FORCE_OPTION $_TAGS;

# current_branch=$INPUT_CURRENT_BRANCH
# master_branch=$INPUT_MASTER_BRANCH
# dev_branch=$INPUT_DEVELOPMENT_BRANCH
# feature_branch_prefix=$INPUT_FEATURE_BRANCH_PREFIX
# bugfix_branch_prefix=$INPUT_BUGFIX_BRANCH_PREFIX
# release_branch_prefix=$INPUT_RELEASE_BRANCH_PREFIX
# hotfix_branch_prefix=$INPUT_HOTFIX_BRANCH_PREFIX
# support_branch_prefix=$INPUT_SUPPORT_BRANCH_PREFIX
# tag_prefix=$INPUT_TAG_BRANCH_PREFIX

# Feature finish
if [[ -z "${INPUT_CURRENT_BRANCH##*$INPUT_FEATURE_BRANCH_PREFIX*}" ]] ;then
    git checkout $INPUT_DEVELOPMENT_BRANCH
    # git merge --no-ff "${remote_repo}" HEAD:${INPUT_CURRENT_BRANCH}
    git merge --no-ff origin/$INPUT_CURRENT_BRANCH
    git push --delete "${remote_repo}" HEAD:${INPUT_CURRENT_BRANCH}
    git push "${remote_repo}" HEAD:${INPUT_DEVELOPMENT_BRANCH}
    #git branch - $current_branch
    # https://github.com/mlucascardoso/git-flow-ci-cd-action
    # git push https://<YOUR-PERSONAL-ACCESS-TOKEN>@github.com/<User-Name>/<Repo-Name>.git
    # git push --delete origin $current_branch
    # git push origin $dev_branch

elif [[ -z "${INPUT_CURRENT_BRANCH##*$INPUT_BUGFIX_BRANCH_PREFIX*}" ]] ;then
    echo "bugfix"
elif [[ -z "${INPUT_CURRENT_BRANCH##*$INPUT_RELEASE_BRANCH_PREFIX*}" ]] ;then
    echo "release"
elif [[ -z "${INPUT_CURRENT_BRANCH##*$INPUT_HOTFIX_BRANCH_PREFIX*}" ]] ;then
    echo "hotfix"
elif [[ -z "${INPUT_CURRENT_BRANCH##*$INPUT_SUPPORT_BRANCH_PREFIX*}" ]] ;then
    echo "support"
fi

