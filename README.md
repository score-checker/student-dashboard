# Student Dashboard Frontend

A local, frontend-only recreation of the signed-in student dashboard layout and its linked pages. Profile details, the profile photo, and course results are static content in the project files. A published copy makes those details and the source files visible to its audience. The site does not connect to IIT Madras services, authenticate users, or submit forms.

## Run locally

Requires Node.js 18 or later.

```sh
npm start
```

Then open [http://127.0.0.1:4173/student_dashboard](http://127.0.0.1:4173/student_dashboard).

## Publish with GitHub Pages

The app uses hash-based page navigation, so all pages work when GitHub hosts it under a repository path. The workflow in `.github/workflows/deploy-pages.yml` publishes the static frontend whenever `main` or `master` is updated (or when manually started from Actions). In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**. After the first successful run, GitHub shows the live site URL in the `github-pages` environment and Pages settings.

The page navigation, dashboard tabs, announcement stars, course detail panels, searchable document tables, profile edit controls, and exam preference form are interactive in this local preview.
