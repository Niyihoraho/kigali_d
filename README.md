# Diplomate Hotel - Next.js Website

A modern, responsive hotel website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- **Modern React Components**: Modular component architecture for maintainability
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Interactive Elements**: Booking form, mobile menu, scroll-to-top functionality
- **Optimized Images**: Next.js Image component for performance
- **Smooth Animations**: CSS transitions and hover effects

## Project Structure

```
kigali_d/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with mobile menu
│   │   ├── Hero.tsx            # Hero section with call-to-action
│   │   ├── Booking.tsx         # Hotel booking form
│   │   ├── About.tsx           # About section
│   │   ├── Dining.tsx          # Dining & bar section
│   │   ├── Conference.tsx      # Conference & events section
│   │   ├── Garden.tsx          # Garden section
│   │   ├── Rooms.tsx           # Rooms gallery with masonry layout
│   │   ├── Footer.tsx          # Footer with contact info and newsletter
│   │   └── ScrollToTop.tsx     # Scroll to top button
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── layout.tsx              # Root layout with fonts and metadata
│   └── page.tsx                # Main page combining all components
├── public/
│   ├── logo/                   # Hotel logo images
│   ├── reception/              # Reception area images
│   ├── restraunt/              # Restaurant images
│   ├── menu/                   # Menu and food images
│   ├── conference/             # Conference room images
│   ├── garden/                 # Garden images
│   ├── rooms/                  # Hotel room images
│   └── hero-bg.jpg             # Hero section background
└── package.json                # Dependencies and scripts
```

## Components Overview

### Header Component
- Responsive navigation with mobile menu toggle
- Social media links
- Smooth scroll navigation
- Login/Signup link

### Hero Component
- Full-screen hero section with background image
- Call-to-action button
- Responsive typography

### Booking Component
- Interactive booking form with state management
- Date pickers for check-in/check-out
- Room type selection
- Guest count input

### About Component
- Two-column layout with image and text
- Hotel description and welcome message

### Dining Component
- Image gallery of restaurant and bar
- Culinary experience description
- Dark theme styling

### Conference Component
- Event space information
- Professional meeting room images
- Event planning details

### Garden Component
- Tranquil garden description
- Beautiful landscape imagery
- Relaxation-focused content

### Rooms Component
- Masonry layout for room gallery
- Responsive image grid
- Hover effects on images

### Footer Component
- Contact information
- Quick links
- Newsletter subscription
- Social media integration

### ScrollToTop Component
- Smooth scroll to top functionality
- Appears after scrolling 300px
- Styled with hotel brand colors

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with improved performance
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Poppins font family

## Customization

### Colors
The website uses a red color scheme (#dc2626, #b91c1c) which can be customized in the Tailwind configuration or CSS variables.

### Images
All images are stored in the `public/` directory and can be easily replaced. The components use Next.js Image component for optimization.

### Content
Text content can be modified directly in the component files. The structure is designed to be easily maintainable.

## Deployment

The website can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Diplomate Hotel. All rights reserved.