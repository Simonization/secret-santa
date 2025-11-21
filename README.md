# Secret Santa Gift Exchange Website

A beautiful, responsive static website for organizing Secret Santa gift exchanges with your team or friends.

## 🎄 Features

- **Welcome Page**: Engaging landing page with event information
- **Team Directory**: Display all 15 participants with photos and bios
- **Smart Assignment System**: Automated Secret Santa assignments that ensure:
  - No one gets assigned to themselves
  - Each person is assigned exactly once
  - Assignments persist across sessions using localStorage
  - Easy admin reset functionality
- **Gift Theme Ideas**: Inspiration page with 6 themed categories and embedded YouTube videos
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Design**: Clean, festive interface with smooth animations

## 📁 Project Structure

```
secret-santa/
├── index.html          # Welcome/Home page
├── team.html           # Team member directory
├── assignment.html     # Secret Santa assignment page
├── themes.html         # Gift theme inspiration page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── assignment.js   # Assignment logic and localStorage handling
├── images/
│   ├── team/           # Team member photos (person1.jpg - person15.jpg)
│   └── themes/         # Theme category images
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Setup Image Directories

Create the necessary image folders:

```bash
mkdir -p images/team
mkdir -p images/themes
```

### 2. Add Team Member Photos

Add 15 team member photos to the `images/team/` folder with the following naming:
- `person1.jpg` - Emma Thompson
- `person2.jpg` - Michael Chen
- `person3.jpg` - Sarah Martinez
- `person4.jpg` - James Wilson
- `person5.jpg` - Priya Patel
- `person6.jpg` - David Kim
- `person7.jpg` - Lisa Anderson
- `person8.jpg` - Marcus Johnson
- `person9.jpg` - Rachel Foster
- `person10.jpg` - Alex Rodriguez
- `person11.jpg` - Nina Kowalski
- `person12.jpg` - Tom Bradley
- `person13.jpg` - Olivia Wright
- `person14.jpg` - Chris Murphy
- `person15.jpg` - Maya Gupta

**Recommended image specs:**
- Format: JPG or PNG
- Dimensions: 400x400px (square) or 4:5 ratio
- File size: Under 500KB each
- Professional headshots or casual portraits work best

### 3. Add Theme Images

Add 6 themed images to the `images/themes/` folder:
- `cozy.jpg` - Cozy comfort items
- `foodie.jpg` - Food and kitchen items
- `tech.jpg` - Tech gadgets
- `wellness.jpg` - Self-care products
- `creative.jpg` - Art and craft supplies
- `adventure.jpg` - Travel and outdoor gear

**Recommended image specs:**
- Format: JPG or PNG
- Dimensions: 800x600px or 16:9 ratio
- File size: Under 1MB each

### 4. Customize Content

#### Update Team Members
Edit `team.html` to update:
- Names
- Bios/descriptions
- Ensure names match exactly in `js/assignment.js`

#### Update Assignment Names
Edit `js/assignment.js` - line 9-24:
```javascript
const participants = [
    "Your Name 1",
    "Your Name 2",
    // ... add all 15 names
];
```

⚠️ **Important**: Names must match exactly between:
- `team.html` (team cards)
- `assignment.html` (dropdown options)
- `js/assignment.js` (participants array)

#### Customize Event Details
Update these files with your event info:
- `index.html`: Budget, dates, and event description
- `assignment.html`: Budget and date reminders

#### Customize YouTube Videos
Edit `themes.html` to replace video embed codes:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...>
```

## 🌐 Deployment to Digital Ocean

### Option 1: App Platform (Recommended for Beginners)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Digital Ocean**:
   - Log into Digital Ocean
   - Go to "App Platform" → "Create App"
   - Connect your GitHub repository
   - Select the `secret-santa` folder
   - Choose "Static Site" as the resource type
   - Click "Deploy"

3. **Your site will be live** at: `https://your-app-name.ondigitalocean.app`

### Option 2: Droplet with Nginx

1. **Create a Droplet**:
   - Choose Ubuntu 22.04 LTS
   - Basic plan is sufficient
   - Add your SSH key

2. **Install Nginx**:
   ```bash
   ssh root@your_droplet_ip
   apt update
   apt install nginx -y
   ```

3. **Upload Files**:
   ```bash
   # On your local machine
   scp -r secret-santa/* root@your_droplet_ip:/var/www/html/
   ```

4. **Configure Nginx**:
   ```bash
   # On the droplet
   nano /etc/nginx/sites-available/default
   ```
   
   Update the `root` directive:
   ```nginx
   root /var/www/html;
   ```

5. **Restart Nginx**:
   ```bash
   systemctl restart nginx
   ```

6. **Access your site** at: `http://your_droplet_ip`

### Option 3: Simple Static Hosting

Use Digital Ocean Spaces (S3-compatible):
1. Create a Space
2. Enable Static Website hosting
3. Upload all files
4. Access via the Space's URL

## 🎮 How the Assignment System Works

### Assignment Algorithm
1. Creates a shuffled list of all participants
2. Assigns each person to another, ensuring:
   - No self-assignments
   - Each person appears exactly once as giver and receiver
   - Random distribution

### Storage
- Assignments stored in browser's localStorage
- Persists across page reloads
- Each browser/device maintains independent assignments

### Reset Functionality
- Admin can reset all assignments via the "Reset" button
- Generates completely new random assignments
- Requires confirmation to prevent accidental resets

### Testing Assignments
- Open browser console to see current assignments
- Verification runs automatically on page load
- Manual reset: `localStorage.removeItem('secretSantaAssignments')`

## 🔧 Customization Tips

### Color Scheme
Edit CSS variables in `css/style.css` (lines 10-16):
```css
:root {
    --primary-color: #c41e3a;    /* Main red */
    --secondary-color: #165b33;   /* Green */
    --accent-color: #f4c430;      /* Gold */
    /* ... */
}
```

### Navigation
Add/remove pages by editing the navbar in all HTML files:
```html
<ul class="nav-menu">
    <li><a href="your-page.html">New Page</a></li>
</ul>
```

### Team Size
To change from 15 members:
1. Add/remove cards in `team.html`
2. Update dropdown options in `assignment.html`
3. Update `participants` array in `js/assignment.js`

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths are correct
- Ensure images are named exactly as specified
- Verify files are in the correct folders
- Check file extensions (case-sensitive on Linux servers)

### Assignments Not Working
- Open browser console (F12) to check for errors
- Verify all names match exactly across files
- Clear localStorage: `localStorage.clear()`
- Refresh the page

### Mobile Layout Issues
- Clear browser cache
- Test on actual devices, not just browser resize
- Check viewport meta tag is present

## 📱 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## 📝 License

Free to use and modify for your Secret Santa events!

## 🎅 Credits

Built with vanilla HTML, CSS, and JavaScript - no frameworks needed!

---

**Need Help?** Check the inline code comments for detailed explanations of how each component works.

**Enjoy your Secret Santa exchange! 🎄🎁**
