#!/usr/bin/env bash

if [ ! "$1" -o ! "$2" ]; then
  echo 'archive.sh <repo_name> <repo_remote_path>'
  exit 1
fi

repo_name=$1
remote_path=$2

# add all branches
git remote add $repo_name $remote_path
git fetch $repo_name
git push origin refs/remotes/$repo_name/*:refs/heads/$repo_name-*
git fetch origin

# copy the archivee's master branch into a folder of our master branch
git fetch $repo_name master
git read-tree --prefix=$repo_name -u $repo_name/master
git commit -m "Add $repo_name snapshot to master"
git push origin master
