#!/bin/sh
set -e

github_token=$INPUT_GITHUB_TOKEN
tag=$INPUT_TAG

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
    # git checkout $dev_branch
    # git merge --no-ff $current_branch
    # git branch -d $current_branch
elif [[ -z "${current_branch##*$bugfix_branch_prefix*}" ]] ;then
    echo "NOT found"
fi

