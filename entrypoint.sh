#!/bin/sh
set -e

branch=$INPUT_CURRENT_BRANCH
feature_branch_prefix=$INPUT_FEATURE_BRANCH_PREFIX

echo $feature_branch_prefix
echo $branch

if [[ -z "${branch##*$feature_branch_prefix*}" ]] ;then
    echo "found"
else
    echo "NOT found"
fi

# git checkout develop
# git merge --no-ff feature/MYFEATURE
#  	git branch -d feature/MYFEATURE

# feature
# hotfix

# if $branch contains 

# feature/test-feature

# git checkout develop
# git merge --no-ff feature/MYFEATURE
# git branch -d feature/MYFEATURE

github_token=$INPUT_GITHUB_TOKEN
tag=$INPUT_TAG
master_branch=$INPUT_MASTER_BRANCH
dev_branch=$INPUT_DEVELOPMENT_BRANCH
echo "::set-output name=github_token::$github_token"
echo "::set-output name=branch::$branch"
echo "::set-output name=tag::$tag"
echo "::set-output name=development_branch::$dev_branch"
echo "::set-output name=master_branch::$master_branch"
echo "::set-output name=cuka::$cuka"
