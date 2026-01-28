# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Secret Santa 2025 - A fully static, responsive gift exchange website for team holiday events. Built with vanilla HTML5, CSS3, and JavaScript with zero external dependencies or build steps.

## Running the Project

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Local HTTP server (for full functionality)
python -m http.server 8000
# Visit http://localhost:8000
```

No build, compile, or install steps required.

## Testing

- Open in browser and navigate through all pages (index.html, team.html, assignment.html, themes.html)
- Test assignment flow: select name → click "Reveal My Assignment" → verify confetti and result
- Check browser console (F12) for verification logs
- Test responsive design by resizing browser
- Reset localStorage for fresh state: `localStorage.clear()` in console

## Architecture

**Static Site Structure:**
- 4 HTML pages with shared navigation
- Single CSS file (`css/style.css`) with CSS variables for theming
- Single JS file (`js/assignment.js`) for all logic

**Key Files:**
- `js/assignment.js` - Fisher-Yates shuffle algorithm, localStorage persistence, confetti animation
- `css/style.css` - CSS variables define color scheme (red #c41e3a, green #165b33, gold #f4c430)
- `team.html` / `assignment.html` - Team member data (13 participants)

**Assignment Algorithm:**
- Uses Fisher-Yates shuffle for randomization
- Validates no self-assignments (recursive retry on conflict)
- Each person is both giver and receiver exactly once
- Persists to localStorage key: `secretSantaAssignments`

## Customization Points

Team member names must be updated in 3 places when modifying the roster:
1. `team.html` - Team member cards
2. `assignment.html` - Dropdown options
3. `js/assignment.js` - `participants` array

See `CUSTOMIZATION.md` for detailed instructions on colors, branding, and content changes.

## Deployment

Ready to deploy to any static hosting (GitHub Pages, Netlify, Digital Ocean, etc.). See `DEPLOYMENT.md` for detailed instructions including SSL setup.
