# Dayforge

An original habit-powered adventure RPG, fully independent of ChatGPT Sites.

## Publish on GitHub Pages

1. Put the files from this folder in your GitHub repository.
2. Open **Settings → Pages**.
3. Set Source to **Deploy from a branch**.
4. Select **main** and **/docs**, then Save.
5. Wait for the Pages deployment, then open the live URL shown in Settings.

No build tools, API keys, accounts or paid services are required. The HTML, CSS, JavaScript and original SVG artwork are all in `docs/`. The `.nojekyll` file disables Jekyll processing. All asset paths are relative, including module imports, so repository subpaths work.

## Moving an existing save

On the old Dayforge site, open **Settings → Export backup**. On the GitHub Pages version, open **Settings → Restore backup** and select that JSON file. Progress does not transfer automatically between domains. Restoring replaces the current save. Your habits, reflections and progress stay in browser storage and are never committed to this repository.

## Run locally

Serve `docs/` with any static server, for example `python3 -m http.server 8000 --directory docs`, and open `http://localhost:8000`.

## Check

Run `node --test engine.test.mjs` and `node --check docs/app.mjs`. No dependencies are required.

## Features

- Daily and weekday habits plus one-off tasks.
- Effort-scaled XP, coins and energy; three character skills.
- Three timed expeditions, level gates, rewards and materials.
- Three equipment recipes; one equipped bonus captured at expedition departure.
- One daily reflection, focus timer, completion chart and activity log.
- Device-local saves with validated JSON export and restore.

## Prototype limitations

No cloud sync, login, shared quests, notifications, combat or native Android package. Device clocks and save files are user-controlled, so this is not yet suitable for competitive multiplayer. Focus timers reset on reload; expeditions persist. Export backups because browser data can be cleared. Google Fonts is optional and falls back to system fonts.

## Original implementation

Inspired by the public habit-powered RPG concept described by Levla at https://levla.app and its Google Play listing, reviewed 1 November 2026. No APK, private API or proprietary source was inspected. Dayforge code, world, artwork, reward values and mechanics are original.
