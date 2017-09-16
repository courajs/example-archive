A repository to archive old repositories. 

Particularly useful for keeping your Github org tidy (or saving you
money if you're on the legacy per-repo billing scheme).

To archive a new repo, run `archive.sh <archived_name> <remote_path>`.
All branches are pulled over, prefixed with the repo name. The HEAD
commit is also put in a folder in `master`, for ease of browsing.
`archived_name` will determine the branch prefixes and folder name, and
`remote_path` should be either a filesystem path or remote url suitable
for cloning.

See [`example-archive`](https://github.com/courajs/example-archive) to
see what it looks like populated.

Note - this is only tested on OSX.

Feel free to fork and use privately! Please share any improvements that
you make.
