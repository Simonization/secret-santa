# 🎅 Secret Santa Website - Project Overview

Welcome to your complete Secret Santa website! Everything is ready for deployment to Digital Ocean.

## 📦 What's Included

### Core Website Files
✅ **4 HTML Pages**
- `index.html` - Welcome page with event information
- `team.html` - Team member directory with 15 members
- `assignment.html` - Secret Santa assignment system
- `themes.html` - Gift inspiration with 6 themed categories

✅ **Styling**
- `css/style.css` - Complete responsive CSS (39KB)
- Modern design with red/green holiday colors
- Mobile-first responsive layout
- Smooth animations and transitions

✅ **JavaScript**
- `js/assignment.js` - Smart assignment algorithm
- No duplicates, no self-assignments
- localStorage persistence
- Admin reset functionality
- Confetti animation on reveal

### Documentation Files
📚 **README.md** - Main documentation with setup instructions
📚 **DEPLOYMENT.md** - Step-by-step Digital Ocean deployment guide (3 methods)
📚 **CUSTOMIZATION.md** - Easy customization guide for your content
📚 **.gitignore** - Git configuration file

### Image Folders (with instructions)
📁 **images/team/** - 15 team member photos (placeholder README included)
📁 **images/themes/** - 6 gift theme images (placeholder README included)

## 🚀 Quick Start (5 Minutes)

### Step 1: Add Your Images

1. **Team Photos** (15 images needed):
   - Add to `images/team/` folder
   - Name them: person1.jpg, person2.jpg, ... person15.jpg
   - Recommended: 400x400px, under 500KB each

2. **Theme Photos** (6 images needed):
   - Add to `images/themes/` folder
   - Name them: cozy.jpg, foodie.jpg, tech.jpg, wellness.jpg, creative.jpg, adventure.jpg
   - Recommended: 800x600px, under 1MB each

### Step 2: Update Names

Edit these 3 files with your actual team names:

1. **team.html** - Update each person's name and bio
2. **assignment.html** - Update dropdown options (lines 34-50)
3. **js/assignment.js** - Update participants array (lines 8-24)

⚠️ **Critical**: Names must match EXACTLY across all three files!

### Step 3: Customize Event Details

Update in `index.html` and `assignment.html`:
- Event date (currently: December 20th, 6 PM)
- Gift budget (currently: $25-30)
- Year in navigation (currently: 2025)

### Step 4: Deploy

Choose your deployment method from `DEPLOYMENT.md`:
- **App Platform** (Easiest - Free)
- **Droplet** ($6/month - More control)
- **Spaces** ($5/month - CDN included)

## 📊 File Structure

```
secret-santa/
├── index.html              # Home page
├── team.html               # Team directory
├── assignment.html         # Assignment system
├── themes.html             # Gift ideas
├── css/
│   └── style.css          # All styling
├── js/
│   └── assignment.js      # Assignment logic
├── images/
│   ├── team/              # Team photos go here
│   │   └── README.md
│   └── themes/            # Theme photos go here
│       └── README.md
├── README.md              # Main documentation
├── DEPLOYMENT.md          # Deployment guide
├── CUSTOMIZATION.md       # Customization guide
└── .gitignore            # Git configuration
```

## ✨ Key Features

### 🎯 Smart Assignment System
- **Random & Fair**: Everyone gets assigned exactly once
- **No Self-Assignments**: Algorithm prevents anyone getting themselves
- **Persistent**: Assignments saved in browser localStorage
- **Admin Controls**: Easy reset for new assignments
- **Verification**: Automatic checks ensure assignments are valid

### 📱 Fully Responsive
- Desktop: Beautiful 3-column grid layout
- Tablet: Adaptive 2-column layout
- Mobile: Single-column, touch-friendly
- All pages optimized for mobile viewing

### 🎨 Modern Design
- Festive red and green color scheme
- Smooth hover effects and animations
- Confetti celebration on assignment reveal
- Professional typography and spacing
- Accessible color contrasts

### 🎁 Gift Inspiration
- 6 themed gift categories
- Embedded YouTube videos for each theme
- 5 gift ideas per category
- Budget-friendly suggestions
- Pro gift-giving tips

## 🎯 How the Assignment System Works

1. **First Visit**: Algorithm generates random assignments
2. **Storage**: Saved to browser's localStorage
3. **Retrieval**: Same assignments shown on return visits
4. **Reset**: Admin can regenerate all assignments
5. **Verification**: System checks for validity on every load

### Technical Details
- Uses Fisher-Yates shuffle for randomization
- Recursive generation if conflicts occur
- Each person appears once as giver and receiver
- Browser-specific (different browsers = different assignments)
- No server needed - completely client-side

## 🔧 Customization Options

All customizable without coding knowledge:

### Easy Changes
- ✏️ Team member names and bios
- 🖼️ Photos and images
- 📅 Event dates and budget
- 🎨 Color scheme (CSS variables)
- 📺 YouTube videos
- 🎁 Gift themes and ideas

### Advanced Changes (Optional)
- Add/remove team members
- Create additional pages
- Modify layout and structure
- Change fonts and typography
- Add custom animations

See `CUSTOMIZATION.md` for detailed instructions.

## 🌐 Deployment Options

### Option 1: Digital Ocean App Platform
- **Cost**: FREE (within limits)
- **Difficulty**: ⭐ Easiest
- **Auto-Deploy**: Yes (from Git)
- **Best For**: Quick deployment, automatic updates

### Option 2: Digital Ocean Droplet
- **Cost**: $6/month
- **Difficulty**: ⭐⭐ Moderate
- **Control**: Full server access
- **Best For**: Custom configuration, learning

### Option 3: Digital Ocean Spaces
- **Cost**: $5/month
- **Difficulty**: ⭐ Easy
- **CDN**: Included
- **Best For**: Simple static hosting

See `DEPLOYMENT.md` for step-by-step instructions for each method.

## 🔍 Testing Checklist

Before deploying, verify:

- [ ] All 15 team member names match across all files
- [ ] All team photos are added and display correctly
- [ ] All theme photos are added and display correctly
- [ ] Event dates and budget are correct
- [ ] Assignment system works (test multiple names)
- [ ] Reset button works
- [ ] All YouTube videos play
- [ ] Navigation works on all pages
- [ ] Site is responsive (test on mobile)
- [ ] All links work correctly

## 🐛 Troubleshooting

### Images Not Showing?
- Check file names match exactly (case-sensitive)
- Verify images are in correct folders
- Check file extensions (.jpg vs .jpeg)

### Assignments Not Working?
- Open browser console (F12) for errors
- Verify names match in all 3 files
- Clear localStorage: `localStorage.clear()`
- Refresh and try again

### Layout Issues?
- Clear browser cache
- Test in different browsers
- Check CSS file loaded correctly

## 📱 Browser Support

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (desktop & iOS)
- ✅ Mobile browsers (iOS & Android)

## 🎓 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks needed
- **localStorage**: Data persistence
- **YouTube API**: Video embeds

No build process, no dependencies, no compilation needed!

## 📞 Support Resources

- **Digital Ocean Docs**: https://docs.digitalocean.com
- **CSS Tricks**: https://css-tricks.com
- **MDN Web Docs**: https://developer.mozilla.org

## 🎉 Ready to Deploy?

1. ✅ Review this overview
2. 📖 Read the README.md
3. 🖼️ Add your images
4. ✏️ Update names and details
5. 🚀 Follow DEPLOYMENT.md
6. 🎅 Enjoy your Secret Santa!

---

## 💡 Pro Tips

- **Test Locally First**: Open `index.html` in your browser before deploying
- **Use Git**: Track changes and enable easy updates
- **Mobile Preview**: Test on actual phones, not just browser resize
- **Image Optimization**: Compress images before uploading (use TinyPNG.com)
- **Backup Assignments**: Take a screenshot of the console logs showing assignments
- **Set Reminders**: Email participants when assignments are ready
- **Plan Ahead**: Deploy at least 2 weeks before the exchange date

---

**Questions? Check the documentation files or the inline code comments!**

**Need help? All code is well-commented for easy understanding.**

**Happy Holidays and Enjoy Your Secret Santa! 🎄🎁**
