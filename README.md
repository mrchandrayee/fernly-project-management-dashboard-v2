# Fernly — Project Management Dashboard

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/fernly-project-management-dashboard-v2/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Responsive, standalone frontend recreation of the uploaded 6.03-second screen recording (720 × 1280, 30 fps).

## Run
1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. No npm install, build command, API key or backend is required.

Optional local server:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## Screens and features visible in the video
- Brand: **Fernly**. User shown: **Noah Castell**.
- Sidebar: Dashboard, Tasks (10), Calendar, Analytics, Team, Settings, Help and Logout.
- Dashboard: Total Projects, Ended Projects, Running Projects, Pending Projects, Project Analytics, Reminders (Check-in with Hatchery Labs) and project list.
- Tasks: To do, In progress, In review and Done columns; All / My tasks / High priority / Due this week filters; task cards with category, priority, due date, comment count and assignee.
- Analytics: Tasks completed, Hours tracked, On-time delivery, Avg. cycle time and Throughput; 7D / 30D / 90D ranges and CSV export.
- Calendar: monthly view, event cards and month navigation.
- Team: member directory and invite dialog.
- Settings: Profile, Notifications and Appearance with accent color choices.
- Help page and global search.

## Interactions
- Navigate between all sidebar sections.
- Add project and task, edit task details, drag tasks between workflow stages.
- Filter tasks by owner, priority and due date.
- Calendar month navigation and add event dialog.
- Analytics date range switch and local CSV export.
- Team invite dialog, profile and notification settings.
- Appearance accent switch (Forest, Ocean, Plum, Sunset, Rose) is persisted in browser localStorage.
- Collapsible desktop sidebar, mobile navigation, search shortcut Cmd/Ctrl+K, toast messages and dialogs.

## Source-code extraction from the screen
The bottom code panel in the recording shows `settings.js`, 14 numbered lines. The visible snippet is transcribed in `src/settings.js`:

```js
// The accent re-tints the whole workspace, remembered here.
const root = document.documentElement;
const accent = store.get('fernly:accent', 'forest');

$('[data-accents]', view).addEventListener('change', (e) => {
  const v = e.target.value;
  if (v === 'forest') delete root.dataset.accent;
  else root.dataset.accent = v;
  store.set('fernly:accent', v);
  gsap.fromTo(e.target.nextElementSibling,
    { scale: .6, rotation: -20 },
    { scale: 1, rotation: 0, duration: .6, ease: 'back.out(2.5)' });
  toast(`Accent set to ${e.target.parentElement.textContent.trim()}`);
});
```

The clip does not show the implementations/imports for `store`, `view`, `$`, `gsap` or `toast`. In the standalone reconstruction, the same accent selection behavior is implemented with localStorage and the Web Animations API, so it runs without dependencies. The transcribed snippet is preserved separately as the visible source excerpt.

## Demo data / limitations
Project names, counts, dates, team members and analytics are sample values transcribed or inferred from the UI. Changes are local to the browser session (accent preference persists). There is no connected server, authentication, team collaboration, cloud database or live project API.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
