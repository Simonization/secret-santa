# Customization Guide

This guide will help you customize the Secret Santa website for your specific event and team.

## Table of Contents
1. [Team Members](#team-members)
2. [Event Details](#event-details)
3. [Colors & Branding](#colors--branding)
4. [Gift Themes](#gift-themes)
5. [YouTube Videos](#youtube-videos)

---

## Team Members

### Step 1: Update Team Cards (team.html)

Location: `team.html` (around lines 31-143)

For each team member, update:

```html
<div class="team-card">
    <div class="team-image">
        <img src="images/team/person1.jpg" alt="Your Name">
    </div>
    <div class="team-info">
        <h3>Your Name</h3>
        <p>Your 2-3 sentence bio goes here. Include hobbies, interests, or fun facts.</p>
    </div>
</div>
```

**Tips:**
- Keep bios concise (2-3 sentences)
- Mention hobbies/interests to help with gift ideas
- Use a friendly, casual tone

### Step 2: Update Dropdown (assignment.html)

Location: `assignment.html` (around lines 34-50)

Update each name in the dropdown:

```html
<option value="Your Name">Your Name</option>
```

⚠️ **Important**: Name must match exactly with team.html and assignment.js

### Step 3: Update JavaScript Array (js/assignment.js)

Location: `js/assignment.js` (lines 8-24)

Update the participants array:

```javascript
const participants = [
    "First Person Name",
    "Second Person Name",
    "Third Person Name",
    // ... continue for all members
];
```

⚠️ **Critical**: All three places (team.html, assignment.html, assignment.js) must have **identical names**.

---

## Event Details

### Budget Amount

**Files to update:**

1. **index.html** (line 53):
```html
<p>Keep gifts thoughtful and within a $25-30 budget...</p>
```

2. **assignment.html** (line 61):
```html
<li>Suggested budget: $25-30</li>
```

### Event Date & Time

**Files to update:**

1. **index.html** (line 59):
```html
<p>Get your assignment by December 5th. Gift exchange party on December 20th at 6 PM...</p>
```

2. **assignment.html** (line 62):
```html
<li>Gift exchange date: December 20th, 6 PM</li>
```

### Event Name/Year

**All HTML files** - Update navigation logo:
```html
<div class="nav-logo">🎅 Secret Santa 2025</div>
```

---

## Colors & Branding

### Update Color Scheme

Location: `css/style.css` (lines 11-17)

```css
:root {
    /* Change these values */
    --primary-color: #c41e3a;    /* Main color (currently red) */
    --secondary-color: #165b33;   /* Secondary (currently green) */
    --accent-color: #f4c430;      /* Accent (currently gold) */
    
    /* Background colors */
    --dark-bg: #1a1a1a;
    --light-bg: #f8f9fa;
}
```

**Color Tools:**
- https://coolors.co/ - Generate color palettes
- https://color.adobe.com/ - Adobe Color Wheel

### Update Logo/Branding

**Navigation Logo** (all HTML files):
```html
<div class="nav-logo">🎄 Your Company Secret Santa</div>
```

**Hero Title** (index.html):
```html
<h1 class="hero-title">🎄 Welcome to Your Event Name! 🎁</h1>
```

---

## Gift Themes

### Modify Existing Themes

Location: `themes.html`

Each theme block (lines 29-280) contains:

```html
<div class="theme-block">
    <div class="theme-content">
        <div class="theme-text">
            <h2>🎨 Your Theme Name</h2>
            <p>Description of the theme and who it's perfect for.</p>
            <ul class="theme-ideas">
                <li>Gift idea 1</li>
                <li>Gift idea 2</li>
                <li>Gift idea 3</li>
                <li>Gift idea 4</li>
                <li>Gift idea 5</li>
            </ul>
        </div>
        <div class="theme-image">
            <img src="images/themes/your-theme.jpg" alt="Theme description">
        </div>
    </div>
    <div class="theme-video">
        <!-- Video section -->
    </div>
</div>
```

### Add a New Theme

1. Copy an entire `<div class="theme-block">` section
2. Paste it in themes.html
3. Update:
   - Theme name and emoji
   - Description
   - Gift ideas list
   - Image path
   - Video embed code

### Remove a Theme

Simply delete the entire `<div class="theme-block">...</div>` section.

---

## YouTube Videos

### Finding the Video Embed Code

1. Go to the YouTube video
2. Click **"Share"** → **"Embed"**
3. Copy the embed code

### Replace Video in themes.html

Find the iframe section:

```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
        title="Your Video Title" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

**Just replace `VIDEO_ID_HERE`** with your video's ID.

**Finding Video ID:**
From URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
Video ID: `dQw4w9WgXcQ`

### Recommended Video Topics

- "Gift ideas under $30"
- "Secret Santa gift guide"
- "Best gifts for [coworkers/friends/family]"
- "DIY gift ideas"
- Theme-specific searches (e.g., "tech gifts", "foodie gifts")

---

## Advanced Customizations

### Change Number of Team Members

**More than 15 members:**

1. Add more cards to `team.html`
2. Add more options to `assignment.html` dropdown
3. Add more names to `js/assignment.js` participants array
4. Add corresponding images (person16.jpg, person17.jpg, etc.)

**Fewer than 15 members:**

1. Remove cards from `team.html`
2. Remove options from `assignment.html`
3. Remove names from `js/assignment.js`

### Add New Pages

1. Create new HTML file (e.g., `rules.html`)
2. Copy the navigation from another page
3. Add your content
4. Update navigation in ALL HTML files:

```html
<ul class="nav-menu">
    <!-- Existing links -->
    <li><a href="rules.html">Rules</a></li>
</ul>
```

### Custom Fonts

Add to `<head>` of all HTML files:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name&display=swap" rel="stylesheet">
```

Update CSS:

```css
:root {
    --font-main: 'Your Font Name', sans-serif;
}
```

### Custom Favicon

1. Create a 32x32px icon (favicon.ico)
2. Add to `<head>` of all HTML files:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

---

## Testing Your Changes

### Checklist Before Deployment

- [ ] All team member names match across all files
- [ ] All images are uploaded and named correctly
- [ ] Event dates and budget are correct
- [ ] Test assignment system (try multiple names)
- [ ] Check responsive design (resize browser)
- [ ] Test on mobile device
- [ ] Verify all links work
- [ ] Check all videos play correctly

### Browser Testing

Test on:
- Chrome/Edge (Windows/Mac)
- Firefox
- Safari (Mac/iOS)
- Mobile browsers (iOS Safari, Chrome Android)

### Assignment System Test

1. Clear localStorage: `localStorage.clear()` in browser console
2. Select a name from dropdown
3. Click "Reveal My Assignment"
4. Verify you can see someone's name
5. Refresh page and select same name - should see same person
6. Click "Reset All Assignments"
7. Try again - should see different assignments

---

## Quick Reference: File Locations

| What to Change | File(s) |
|---------------|---------|
| Team member names | team.html, assignment.html, js/assignment.js |
| Team member photos | images/team/ |
| Team member bios | team.html |
| Event dates | index.html, assignment.html |
| Gift budget | index.html, assignment.html |
| Colors | css/style.css |
| Gift themes | themes.html |
| Theme images | images/themes/ |
| Videos | themes.html |

---

## Need More Help?

Check the inline comments in the code files - they provide detailed explanations of what each section does.

**Happy customizing! 🎄**
