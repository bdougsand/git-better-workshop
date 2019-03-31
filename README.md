# Git Better Workshop Materials

This repository represents a realistic sample application to be used in a git workshop. The code inside is built on top of [Create React App](https://facebook.github.io/create-react-app/), though understanding of JavaScript shouldn't necessarily be a prerequisite for the workshop. It has several branches:

1. **`_start_here`**: the branch you're looking at right now, intended for workshop facilitators.
2. **`master`**: a starting branch upon which other branches will build.
3. **`choose_government_level`**: a feature branch that adds additional functionality.
4. **`cleanup`**: a branch with a few commits that clean up the code, which conflict with the `choose_government_level` branch and sometimes break the code. It might be valuable for the facilitator to push commits one at a time and then talk about whether to merge or not.
5. **`better_docs`**: a documentation branch that repository maintainers might be interested in. Contains an improved README. `TODO` add contributing guidelines, a code of conduct, and perhaps a built-in linter.

## Personas

Different commits in different branches have different committers:

1. `Harry Helpful <hhelpful@gmail.com>` wants to clean up the code.
2. `Mara Maintainer <mara.maintainer@gmail.com>` is a repository maintainer and wants to make sure that new members can easily contribute to the codebase.

Set the `user.name`/`user.email` git config in order to commit as a different persona. For example, to commit as Harry:

```
git config user.name "Harry Helpful"
git config user.email "hhelpful@gmail.com"
```
