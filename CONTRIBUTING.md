# Prerequisites

nodejs
git

# Workflow

To contribute to this repository:

1.  **Fork the Repository** to your GitHub account
2.  **Clone your Fork ** to your local machine:

```bash
git clone <myForkedBtabRepo>
```

3. **Configure remote upstream**, so that you can catch any changes in the original Btab repo:

```sh
cd <myForkedBtabRepo>
git remote add upstream git@github.com:BtabTechnology/btab_backdrop.git (fetch)
//assumin you are using ssh otherwise change to https
```

...after this setup you can check with if everything is ok using `git remote -v`

```sh
$ btab_backdrop(main)$ git remote -v
origin  git@github.com:YourName/btab_backdrop.git (fetch)
origin  git@github.com:YourName/btab_backdrop.git (push)
upstream        git@github.com:BtabTechnology/btab_backdrop.git (fetch)
upstream        git@github.com:BtabTechnology/btab_backdrop.git (push)
```

Once you have this setup, the commands will usually consist of:

- creating a new branch, `git checkout -b featurex`
- checking for changes on the original fork (Btab), `git pull upstream main`
- working on your feature or fix,
- committing the changes, `git add .` and `git commit -m"what I did"`
- pushing the feature branch to your fork on GitHub, `git push origin featurex`
- making a pull request,
- then if the changes accepted they will be merged to Btab main branch.

At this point you can checkout to your local main branch and pull the freshly updated Btab main branch

```sh
git checkout main
git pull upstream/main
```

Commit the changes and push it to your GitHub repo if you like:

```sh
git push origin main
```
