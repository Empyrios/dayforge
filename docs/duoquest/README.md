# DuoQuest

A private, mobile-first relationship planner with shared adventure ideas, dates, memory journal, dreams and anniversary milestones.

## Launch

Host the `docs` folder on a static web server and navigate to `/duoquest/`. With GitHub Pages publishing from `main` → `/docs`, the app URL is `https://empyrios.github.io/dayforge/duoquest/`.

## Features

- Add/edit/delete dates with location, budget in GBP, details and completion.
- Track relationship days and monthly anniversaries.
- Save memories and bucket-list dreams.
- Daily couple challenges.
- Local-first JSON backup/restore and local erase.
- Installable PWA shell with offline caching.

## Privacy and limits

Everything you enter is saved only to the browser's localStorage. Nothing is transmitted to a backend or shared automatically with another person. Do not commit personal records to GitHub. Browser data can be erased, so make regular backups. The interface is publicly accessible, but your local records are not stored in the repository. This MVP has no accounts, synchronisation, photo hosting, push notifications or backend security controls.

## Check

```bash
node --test tests/duoquest.test.mjs
node --check docs/duoquest/app.mjs
node --check docs/duoquest/engine.mjs
node --check docs/duoquest/sw.js
```

The project intentionally uses no npm dependencies for its initial release.
