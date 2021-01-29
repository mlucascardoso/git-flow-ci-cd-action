#!/bin/sh
set -e

# git credentials
email=$INPUT_EMAIL
name=$INPUT_NAME
password=$INPUT_PASSWORD
username=$INPUT_USERNAME

git config user.email "$email"
git config user.name "$name"
git config user.password "$password"
git config credential.username "$username"

current_branch=$INPUT_CURRENT_BRANCH
master_branch=$INPUT_MASTER_BRANCH
dev_branch=$INPUT_DEVELOPMENT_BRANCH
feature_branch_prefix=$INPUT_FEATURE_BRANCH_PREFIX
bugfix_branch_prefix=$INPUT_BUGFIX_BRANCH_PREFIX
release_branch_prefix=$INPUT_RELEASE_BRANCH_PREFIX
hotfix_branch_prefix=$INPUT_HOTFIX_BRANCH_PREFIX
support_branch_prefix=$INPUT_SUPPORT_BRANCH_PREFIX
tag_prefix=$INPUT_TAG_BRANCH_PREFIX

# Feature finish
if [[ -z "${current_branch##*$feature_branch_prefix*}" ]] ;then
    echo "feature" 
    git checkout $dev_branch
    git merge --no-ff origin/$current_branch
    #git branch - $current_branch
    # https://github.com/mlucascardoso/git-flow-ci-cd-action
    # git push https://<YOUR-PERSONAL-ACCESS-TOKEN>@github.com/<User-Name>/<Repo-Name>.git
    # git push --delete origin $current_branch
    git push origin $dev_branch
elif [[ -z "${current_branch##*$bugfix_branch_prefix*}" ]] ;then
    echo "bugfix"
elif [[ -z "${current_branch##*$release_branch_prefix*}" ]] ;then
    echo "release"
elif [[ -z "${current_branch##*$hotfix_branch_prefix*}" ]] ;then
    echo "hotfix"
elif [[ -z "${current_branch##*$support_branch_prefix*}" ]] ;then
    echo "support"
fi

