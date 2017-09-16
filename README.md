An archive of a few javascript games I've made.

This is to serve as an example of what using my
[`archive.sh`](https://github.com/courajs/archive) script looks like in
practice.

Notice the `concentration-img` and `concentration-master` branches match
the `img` and `master` branches of [the original
repo](https://github.com/courajs/concentration), and the folder here on
`archive/master` is a snapshot of `concentration/master`.

To archive a new repo, run `archive.sh <archived_name> <remote_path>`.
All branches are pulled over, prefixed with the repo name. The HEAD
commit is also put in a folder in `master`, for ease of browsing.
`archived_name` will determine the branch prefixes and folder name, and
`remote_path` should be either a filesystem path or remote url suitable
for cloning.
