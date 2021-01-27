#!/bin/sh
set -e

master_branch=$INPUT_MASTER_BRANCH
echo $master_branch

dev_branch=$INPUT_DEVELOPMENT_BRANCH
echo $dev_branch

echo "::set-output name=master_branch::$master_branch"
echo "::set-output name=development_branch::$dev_branch"
