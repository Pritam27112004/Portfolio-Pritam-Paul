# Professional Developer Portfolio

A modern, premium-looking personal portfolio website built with React and Tailwind CSS. It features a futuristic dark theme with glassmorphism effects, smooth scrolling, and dynamic animations.

## Tech Stack
- **React 19**
- **Vite** (Build tool)
- **Tailwind CSS v4** (Styling)
- **Framer Motion** (Animations)
- **React Icons** (SVG icons)
- **React Scroll** (Smooth scrolling navigation)
- **Microlink** (Automatic link previews for projects)

## Project Structure
```text
PortfolioMain2/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Volunteering.jsx
│   │   ├── Publications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   └── ScrollProgress.jsx
│   ├── data/               # Mock JSON data
│   │   └── portfolioData.js
│   ├── index.css           # Tailwind configurations & Custom CSS
│   ├── App.jsx             # Main Application layout
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite & Tailwind setup
└── README.md
```

## Setup Instructions

1. **Install Dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Run Development Server**
   Start the local Vite dev server:
   ```bash
   npm run dev
   ```

3. **Build for Production**
   To create an optimized production build:
   ```bash
   npm run build
   ```

## Customization

To personalize the portfolio, you simply need to update the `src/data/portfolioData.js` file. The entire website is data-driven, so modifying the JSON structure will automatically update the UI components.

Theme colors are defined in `src/index.css` using Tailwind v4's `@theme` directive. You can change primary and secondary colors by modifying the CSS variables.
