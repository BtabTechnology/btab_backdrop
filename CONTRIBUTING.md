# Prerequisites

nodejs
git

# Workflow

To contribute to this repository:

1.  **Fork the Repository** to your GitHub account
2.  **Clone your Fork** to your local machine:

```bash
git clone <myForkedBtabRepo>
```

3. **Configure remote upstream**, so that you can catch any changes in the original Btab repo:

```sh
cd <myForkedBtabRepo>
git remote add upstream git@github.com:BtabTechnology/btab_backdrop.git (fetch)
//assuming you are using ssh otherwise change to https
```

You can check the setup using `git remote -v`. It should look like this:

```sh
$ btab_backdrop(main)$ git remote -v
origin  git@github.com:YourName/btab_backdrop.git (fetch)
origin  git@github.com:YourName/btab_backdrop.git (push)
upstream        git@github.com:BtabTechnology/btab_backdrop.git (fetch)
upstream        git@github.com:BtabTechnology/btab_backdrop.git (push)
```

5. The environment variables are located in `.env.template`in the root folder. Copy this file and change the name to `.env`. Edit the file and the add database url: `DATABASE_URL=<add your variable here>`

6. Start your backend:

```sh
cd btab-store
medusa develop
```

Once you have this setup, the workflow will usually follow this pattern:

- create a new branch, `git checkout -b featurex`
- check for changes on the original fork (Btab), `git pull upstream main`
- work on your feature or fix,
- commit the changes, `git add .` and `git commit -m"what I did"`
- push the feature branch to your fork on GitHub, `git push origin featurex`
- make a pull request on GitHub or your 'gh' terminal.
- If the changes accepted they will be merged to Btab main branch.

At this point you can checkout to your local main branch and pull the freshly updated Btab main branch

```sh
git checkout main
git pull upstream main
```
 

```sh
git push origin main
```
