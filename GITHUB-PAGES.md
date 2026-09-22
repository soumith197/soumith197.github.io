# GitHub Pages

This repository uses the website files at its root. A custom GitHub Actions workflow is not needed for this buildless site.

## Publishing configuration

In GitHub, open **Settings → Pages** and use:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

GitHub publishes after pushes to this branch. The Actions tab shows deployment results. If publication fails, inspect the failed run; do not change repository visibility or replace files to troubleshoot blindly.

## Local workflow

From the local `site` folder:

```sh
git pull --ff-only
```

Edit `index.html`, `styles.css`, or `script.js`; open `index.html` in a browser to preview. Then:

```sh
git add index.html styles.css script.js
git commit -m "Update portfolio"
git push
```

The `main` branch tracks `origin/main` at https://github.com/soumith197/soumith197.github.io.git. Authentication may be required for pushes. Complete sign-in through Git or your Git client; never save credentials in these files.

For small edits, open a file on GitHub, choose the pencil, and commit to `main`. Pull before making additional local edits.

## Earlier local setup

The previous `dist` layout, unused custom workflow, and Sites configuration were preserved in the sibling `pre-github-sync-backup` directory. Earlier committed source is also retained on the local `backup/pre-github-sync` branch. Use the root-level files for future changes.

Official documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
