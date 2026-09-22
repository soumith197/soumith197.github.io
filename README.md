# Soumith Reddy Chinthalapally — portfolio

Live site: https://soumith197.github.io/
Repository: https://github.com/soumith197/soumith197.github.io

## Edit the website

The website files are at the repository root:

- `index.html`: content, work experience, projects, and links
- `styles.css`: responsive layout and dark/light themes
- `script.js`: theme switching and saved preferences

Open `index.html` in your browser to preview. No installation or build is required.

## Update and publish

Before editing, pull any changes made on GitHub:

```sh
git pull --ff-only
```

After editing and previewing:

```sh
git add index.html styles.css script.js
git commit -m "Update portfolio"
git push
```

GitHub Pages publishes from `main` and `/ (root)`. Check the repository's Actions tab for deployment status. Editing these files directly on GitHub also triggers publication; pull afterward to update your local copy.

Local changes are not automatically uploaded until you commit and push. GitHub Pages and the previous ChatGPT Site are separate deployments.

See [GITHUB-PAGES.md](GITHUB-PAGES.md) for setup and troubleshooting.
