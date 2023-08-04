# Commit Rules

## Protected Branches

Protected branches are branches that don't allow direct commits. The only way to make code changes on protected branches is by submitting formal pull request and passing the gating criteria so that the code can be merged.

## Commit Messages

All commits must have a summary message in the following format:

```
change_type: [issue_id] summary
```

where:

- `change_type` : has one of the following values
  - `feat` - feature
  - `fix` - bug fix
  - `style` - feature and update related to styling
  - `refactor` - refactoring a specific section of the codebase
  - `test` - everything related to testing
  - `docs` - everything related to documentation
  - `chore` - regular code maintenance
- `issue_id` : it is optional
  - It is the id of the issue that must be raised before creating a pull request
- `summary` : short text summarizing the change

## PR Branch Naming Format

`/<name>/<change_type>/<summary>/<issue_id>`

- name is the username
- change_type can be of types feat, fix, style, refactor, test, docs, chore
- summary should be short
- issue_id is compulsory if you are raising PR for an issue that exists
