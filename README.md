# Git Flow CI/CD Action

[![CI Status](https://github.com/mlucascardoso/git-flow-ci-cd-action/workflows/Gitflow%20CI/badge.svg)](https://github.com/mlucascardoso/git-flow-ci-cd-action/actions)

## Inputs

| name | description | default | required | e.g. |
|:---:|:---|:---:|:---:|:---:|
| github_token | GitHub token used in the action || true | `github_token: ${{ secrets.GITHUB_TOKEN }}` |
| master_branch | Master branch name | `main` | true | `master_branch: 'master'` |
| development_branch | Master branch name | `develop` | true | `development_branch: 'development'` |
| feature_branch_prefix | Prefix for the feature branch | `feature/` | true | `feature_branch_prefix: 'feature/'` |
| bugfix_branch_prefix | Prefix for the bugfix branch | `bugfix/` | true | `bugfix_branch_prefix: 'bugfix/'` |
| release_branch_prefix | Prefix for the release branch | `release/` | true | `release_branch_prefix: 'release/'` |
| hotfix_branch_prefix | Prefix for the hotfix branch | `hotfix/` | true | `hotfix_branch_prefix: 'hotfix/'` |
| tag_prefix | Prefix for the tags | `v` | true | `tag_prefix: 'v'` |

## Usage
e.g. `.github/workflows/git-flow.yml`  
```yaml
name: GitFlow CI

on: 
  pull_request_review:
    branches: [master, development]

jobs:
  build:
    runs-on: ubuntu-latest
    name: GitFlow CI
    steps:
      - uses: actions/checkout@v2
      - name: Run git flow process
        uses: mlucascardoso/git-flow-ci-cd-action@1.0.0
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          master_branch: 'master'
          development_branch: 'development'
```