# Adham Khalifa - React Website

This is the React version of Adham Khalifa's personal website, converted from the original HTML/CSS/JavaScript version while maintaining the exact same design and functionality.

## Features

- **Responsive Design**: Works on all device sizes
- **Animated Background**: Gradient animation effect
- **Typewriter Effect**: Animated text in the intro section
- **Smooth Scrolling**: Navigation with smooth scroll effects
- **Interactive Tabs**: Experience section with tabbed interface
- **AOS Animations**: Scroll-triggered animations
- **Social Links**: Fixed social media links on desktop, footer on mobile

## Technologies Used

- React 18
- Bootstrap 5
- Font Awesome
- AOS (Animate On Scroll)
- jQuery (for legacy functionality)
- CSS3 with custom animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd adhamkhalifa-react
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── SocialLinks.js  # Fixed social links
│   ├── EmailLink.js    # Fixed email link
│   ├── Intro.js        # Hero section with typewriter
│   ├── About.js        # About section
│   ├── Experience.js   # Work experience with tabs
│   ├── Projects.js     # Projects showcase
│   ├── Contact.js      # Contact section
│   └── Footer.js       # Footer with social links
├── App.js              # Main app component
├── index.js            # App entry point
├── index.css           # Global styles
└── style.css           # Custom styles (copied from original)

public/
├── img/                # All images from original site
├── cashify/            # Cashify project assets
└── index.html          # HTML template
```

## Key Features Implemented

1. **Gradient Animation**: Background gradient that continuously changes colors
2. **Typewriter Effect**: Text animation in the intro section
3. **Responsive Navigation**: Bootstrap navbar with mobile hamburger menu
4. **Smooth Scrolling**: Navigation links with smooth scroll behavior
5. **Tabbed Experience**: Interactive tabs for work experience
6. **Hover Effects**: Custom CSS hover animations
7. **Social Links**: Fixed position on desktop, footer on mobile
8. **AOS Animations**: Scroll-triggered animations throughout

## Original vs React Version

The React version maintains:

- ✅ Exact same visual design
- ✅ All animations and effects
- ✅ Responsive behavior
- ✅ All content and links
- ✅ Performance optimizations
- ✅ Modern React best practices

## Deployment

The app can be deployed to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- AWS S3

Simply run `npm run build` and upload the contents of the `build` folder.

## License

This project is for Adham Khalifa's personal use.
