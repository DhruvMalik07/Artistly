# Artistly.com – Performing Artist Booking Platform (Frontend Demo)

## Overview
Artistly.com is a fictional, modern web platform for booking performing artists, built as a demo assignment. It allows event planners to browse, filter, and request bookings for artists, while artist managers can onboard new artists and view submissions via a dashboard. The app is fully responsive, visually engaging, and built with best practices in React and Next.js.

## Features
- **Homepage:**
  - Hero section, navigation, and 6 colorful artist category cards
- **Artist Listing Page:**
  - Grid of artist cards with profile, category, location, and price range
  - Powerful filtering by category, location, and price range
- **Artist Onboarding Form:**
  - Multi-section form for artist details, category, languages, fee range, image upload, and location
  - Form validation and instant addition to the artist list
- **Manager Dashboard:**
  - Table of all artist submissions with name, category, city, and fee
- **State Management:**
  - Uses React Context and localStorage for live updates and persistence
- **Modern UI:**
  - Built with Tailwind CSS, gradients, icons, and responsive layouts

## Tech Stack
- [Next.js 15+ (App Router)](https://nextjs.org/)
- [React 19+](https://react.dev/)
- [Tailwind CSS 4+](https://tailwindcss.com/)
- [React Hook Form + Yup](https://react-hook-form.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## How It Works
- On first load, the app uses mock artist data and saves it to your browser's localStorage.
- Adding a new artist via the onboarding form updates both the app and localStorage instantly.
- All filtering and listing is done client-side, with no backend required.
- Data persists across page reloads (until you clear your browser storage).

## Getting Started
1. **Install dependencies:**
   ```sh
   cd artistly
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure
- `src/app/` – Main app pages (homepage, artists, onboard, dashboard)
- `src/context/ArtistContext.tsx` – Shared artist data and state management
- `public/` – Static assets

## Notes
- This is a frontend-only demo. All data is stored in your browser.
- To reset demo data, clear your browser's localStorage for the site.
- The UI is fully responsive and works on all modern devices.

## License
This project is for demo and educational purposes only.
