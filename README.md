# HTML + Tailwind CSS Project

A modern HTML project using Tailwind CSS for styling and Vite for development.

## Features

- ✅ HTML5 semantic structure
- ✅ Tailwind CSS for utility-first styling
- ✅ Vite for fast development and building
- ✅ Responsive design
- ✅ Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

### Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
.
├── index.html          # Main HTML file
├── main.js            # JavaScript entry point
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
├── package.json       # Project dependencies and scripts
└── README.md          # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Tailwind CSS

This project uses Tailwind CSS via CDN for simplicity. For production projects, consider setting up Tailwind CSS with PostCSS for better optimization.

## Customization

- Modify `tailwind.config.js` to customize Tailwind CSS
- Edit `index.html` to change the HTML structure
- Update `main.js` to add JavaScript functionality
- Adjust `vite.config.js` for Vite configuration

## License

MIT License
