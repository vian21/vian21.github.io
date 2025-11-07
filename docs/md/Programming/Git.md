# Using Git

**Date**: January 18, 2022

## 1. creating & linking a repository

Start you project locally then run the following commands in the terminal:

```bash
git init -b main
git add .
git commit -m "add a message"
```

- now create a repository on github then use the commands they show you for an existing repository

```bash
git remote add origin <Remote URL>
git push origin main
```

## 2. Pushing changes

Every time your done working/making changes to your project, run:

```bash
git add .
git commit -m "commit message"
git push
```

## 3. git clone

Git clone is used to copy an online repository to your computer. You can git clone using the github link(HTTPS), using SSH or just download a zip directly from Github.

```bash
git clone https://github.com/<USERNAME>/<REPOSITORY>
```

## 4. Syncing local branch to remote (git pull)

Git pull is using to update your local branch with the online one. You do this to see to see if there has been some changed on the branch i.e someone has pushed code on it or you made somechanges online or on another machine.

```bash
git pull
```

## 5. Creating a branch (git checkout)

Branches help us prevent merge conflicts which arise when two people work on the same thing and have different code. Github will not know which one to keep or discard. Branches allow one to work on a feature without actually breaking the project. `DON'T WORK ON THE MAIN BRANCH!!!`.

TO create a new branch:

```bash
git checkout -b branchName
```

- checkout/ switch : tells git to change the current branch to the specified branch
- `-b` : tells git to create a new branch. Don't include it if that branch already exists.

## 6. Changing branch (git checkout/switch)

Git checkout allows you to change branch and see what other branch contain. You can switch from your branch to the `main` branch or somebody else's to see what they are working then you can `git pull` to update your local copy of the branch.

```bash
# git checkout branchName
git checkout main # switch to the main branch or git switch main
```

### Renaming a branch

```bash
git branch -M <NewName>
```

## 7. MERGING

NOTE: Merging is done on the main branch

### 1. Commit & Push to your branch

```bash
git add .
git commit -m "commit message(REQUIRED)"
git push
```

### 2. Update your local main branch

```bash
git checkout main
git pull
```

### 3. Merge your branch with the main branch 💀

This is where the 'magic' happens.

```bash
git merge branchName
```

### 4. Resolve conflicts (Not always)

Git will automatically try to merge the two branch and notify you if there are conflicts it can not resolve by its own. That is where you come in.

Try and resolve all the merge conflicts by either:

- Accepting both changes
- keeping the other persons code or Keeping only your if it is the latest or an update/refactor.

#### Merge again

After resolving all the conflicts, try merging again your branch into the master branch.

### 5. Create a Pull request

After successfully, merging the two branch. Go to the repository on Github. Git hub will suggest you to create a pull request.

- Create a pull request
- Add a small message describing what you changed (added and removed)

If it was a minor change you can directly merge the pull request yourself or wait for your repo manager review the code first and approve your changes.

The manager will either merge your pull request or give you an OK to merge the PR yourself.

## Additional

### Updating your branch with what is in the main branch

```bash
git checkout main         # go to the main branch
git pull                  # update it
git checkout branchName   # go back to your branch
git merge main          # merge the latest main into your
```

## 8. Going back in time/ git revert

First, view git history:

```bash
git log --oneline # or git log - to view full commit ids, dates and time
git revert <Commit ID>
```

use the uuid given by git log . Use `git revert HEAD` to revert back to latest commit
