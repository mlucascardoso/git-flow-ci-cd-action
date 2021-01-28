#!/bin/sh
set -e
github_token=$INPUT_GITHUB_TOKEN
echo $github_token

branch=$INPUT_BRANCH
echo $branch

tag=$INPUT_TAG
echo $tag

master_branch=$INPUT_MASTER_BRANCH
echo $master_branch

dev_branch=$INPUT_DEVELOPMENT_BRANCH
echo $dev_branch

echo "::set-output name=master_branch::$github_token"
echo "::set-output name=development_branch::$branch"
echo "::set-output name=master_branch::$tag"
echo "::set-output name=development_branch::$dev_branch"
echo "::set-output name=master_branch::$master_branch"
