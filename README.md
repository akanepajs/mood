# Mood tracker

A small daily check-in app with weekly, monthly, and yearly review questions, served at
https://mood.kanepajs.eu. It installs from the browser as an app and works offline.

Entries never leave the device: they live in the browser's own storage, and "Save backup
file" in Settings writes them all to one JSON file. Nothing is sent to any server.

The site is plain static files: `index.html` (the app), `questions.js` (the question
sets), `sw.js` (offline cache), `manifest.webmanifest` and `icons/` (install metadata).
