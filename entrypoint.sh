#!/bin/sh
set -e

# git credentials
git config user.email ${INPUT_EMAIL}
git config user.name ${INPUT_NAME}
git config user.password ${INPUT_GITHUB_TOKEN}

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
    git branch -D $current_branch
elif [[ -z "${current_branch##*$bugfix_branch_prefix*}" ]] ;then
    echo "bugfix"
elif [[ -z "${current_branch##*$release_branch_prefix*}" ]] ;then
    echo "release"
elif [[ -z "${current_branch##*$hotfix_branch_prefix*}" ]] ;then
    echo "hotfix"
elif [[ -z "${current_branch##*$support_branch_prefix*}" ]] ;then
    echo "support"
fi

