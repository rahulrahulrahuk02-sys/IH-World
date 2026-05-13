# IH RAHUL 66 - Limited Edition Performance Drink Website

A modern, high-performance website for the IH RAHUL 66 premium beverage brand. Built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with full desktop support
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Dark Theme** - Premium aesthetic with gold accents (#D4AF37)
- **Interactive Components**:
  - Fixed header with navigation
  - Mobile menu with smooth transitions
  - Shopping cart drawer
  - Product showcase
  - Technology features grid
  - Crew testimonials
- **Performance Optimized** - Fast load times with Vite
- **Production Ready** - Minified and optimized for deployment

## 📦 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **PostCSS & Autoprefixer** - CSS processing

## 🛠️ Installation

1. **Clone the repository** (or extract files):
```bash
cd IH-World
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

## 📁 Project Structure

```
IH-World/
├── index.html              # HTML entry point
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── .gitignore              # Git ignore rules
├── README.md               # This file
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main component
    └── index.css           # Global styles
```

## 🎨 Customization

### Change Brand Colors
Edit the color values in `src/App.jsx` and `src/index.css`:
- Gold accent: `#D4AF37`
- Dark background: `#0A0A0A`

### Update Text & Content
All text is in `src/App.jsx`. Search for strings you want to modify.

### Add Products
Update the cart items in the cart drawer section of `App.jsx`.

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Traditional Hosting
Upload contents of `dist/` folder to your web server.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📄 License

All rights reserved © 2026 IH WORLD HQ

## 💬 Support

For issues or questions, create a GitHub issue in the repository.

---

**Ready to launch!** 🎉
