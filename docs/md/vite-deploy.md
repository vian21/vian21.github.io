# Deploying a Vite Site to Github Pages
Date: Thu, Jan, 5th, 2022

I was not able to find a github workflow for vite to upload my portfolio to github pages. I did some extensive research but could not find any due to the following restrictions:

- I wanted to make a website for my main github pages link e.g `vian21.github.io`. Github pages does not allow that and requires you to add the repo name after the domain e.g `vian21.github.io/vian21`.
- Most workflows are outdated and not really well document. you have to try everyone of them and the feedback loop is so slow  you have to wait for at least 1 min to see the effects of you changes.

# Solution
Use a bash script to:
1. Build the project
1. Push the build to a remote repository that will only contain those static assets

```sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

 git push -f git@github.com:vian21/vian21.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

# Clean up
cd -
rm -r -f dist
```