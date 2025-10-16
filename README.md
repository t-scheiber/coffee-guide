# ☕ Coffee Guide

A personal web app for quickly accessing espresso settings for different coffee beans and grinders on your phone.

**🌐 Live Site:** [coffee.thomasscheiber.com](https://coffee.thomasscheiber.com)

## 🎯 Purpose

This web app helps me remember and quickly access the correct espresso settings for:
- **Different coffee beans** (Gota Blend, Vienna Calling, and future beans)
- **Two different grinders**:
  - Sage Barista Touch integrated grinder
  - Timemore Sculptor 078s (Black) external grinder
- **Double shot espresso** for milk-based drinks (cappuccino, latte macchiato)

Perfect for checking settings from your phone while making your morning coffee!

## ✨ Features

### 🎨 Modern UI/UX
- **Smooth animations** - Fade-in effects, staggered element loading, and interactive hover states
- **Responsive design** - Fully mobile-first, adapts seamlessly from phone to desktop
- **Interactive cards** - Hover effects with shimmer animations and elevation
- **Beautiful gradients** - Color-coded sections (Amber for Gota Blend, Purple for Vienna Calling)
- **Touch-friendly** - Optimized tap targets and spacing for mobile devices

### 📖 Content
- Organized by bean type, then grinder
- Detailed dialing-in instructions with step-by-step guides
- Extraction parameters and troubleshooting tips
- Milk frothing tips for the Barista Touch Auto MilQ system
- Professional images with hover effects

### ⚡ Performance
- Pure CSS animations (60fps, no JavaScript overhead)
- Hardware-accelerated transitions
- Optimized Next.js Image component
- Static site generation for fast loading

## 🫘 Current Beans

### Gota Blend (Vienna)
- Medium roast from Gota Coffee, Vienna
- Guides for both integrated and Timemore grinders

### Vienna Calling (Wildkaffee Vienna)
- Medium-dark roast blend
- 100% Arabica (El Salvador, Colombia, Rwanda)
- Flavor: Chocolatey, Sweet, Berry notes
- Guides for both integrated and Timemore grinders

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the app in development mode.

## 🚀 Automated Deployment

This project uses GitHub Actions for automated deployment to an FTP server. Every time you push to the `main` branch, the workflow will:

1. **Install dependencies** using `npm ci`
2. **Build the static site** using `npm run build` 
3. **Deploy to FTP server** automatically

### Setup FTP Deployment

To enable automatic deployment, add these secrets to your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add these repository secrets:
   - `FTP_SERVER` - Your FTP server address
   - `FTP_USERNAME` - Your FTP username  
   - `FTP_PASSWORD` - Your FTP password

The workflow file is located at `.github/workflows/deploy.yml` and is configured to:
- Deploy the `out/` directory (Next.js static export output)
- Exclude unnecessary files (git, node_modules, etc.)
- Run on every push to the main branch

## 📂 Project Structure

```
app/
  ├── beans/
  │   ├── gota-blend/
  │   │   ├── integrated-grinder/
  │   │   └── timemore-sculptor/
  │   └── vienna-calling/
  │       ├── integrated-grinder/
  │       └── timemore-sculptor/
  ├── page.tsx (home page)
  └── globals.css
```

## ➕ Adding New Beans

To add a new bean variety:

1. Create a new folder under `app/beans/[bean-name]/`
2. Add two subfolders: `integrated-grinder/` and `timemore-sculptor/`
3. Copy a `page.tsx` from an existing guide and modify the settings
4. Update the home page (`app/page.tsx`) to add links to the new guides

## 🛠️ Tech Stack

- **Next.js 15.5** - Modern React framework with App Router
- **React 18** - Latest React with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Animations** - Custom keyframe animations for smooth UX
- **Static Export** - Optimized for hosting on any static server

### Design Features
- Mobile-first responsive design
- CSS Grid & Flexbox layouts
- Custom animation keyframes (fadeIn, slideIn, bounce, pulse)
- Hardware-accelerated transforms
- Gradient backgrounds and shadows
- Interactive hover states

## 🎯 Key Highlights

- **Clean Architecture** - Organized file structure following Next.js 15 App Router best practices
- **Type Safety** - Full TypeScript implementation for robust code
- **Accessibility** - Semantic HTML and proper contrast ratios maintained
- **Performance** - Optimized animations running at 60fps with CSS-only approach
- **Scalability** - Easy to add new coffee beans and grinder configurations
- **User Experience** - Smooth transitions, loading states, and interactive feedback

## 📄 License

MIT License - See LICENSE file for details

---

Made with ☕ for better espresso
