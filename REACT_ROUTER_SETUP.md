# Portfolio Routing Setup

This portfolio now supports **React Router** for full URL routing. Here are the available routes:

## Available Routes

- **Home**: `/` or `/home`
- **About**: `/about`
- **Certifications**: `/certifications`
- **Skills**: `/technical-skills`
- **Experience**: `/experience`
- **Education**: `/education`
- **Projects**: `/projects`
- **Contact**: `/contact`
- **Resume**: `/resume`

## Features

✅ **Full URL Routing**: Clean URLs like `/about`, `/projects`  
✅ **Browser Navigation**: Back/forward buttons work correctly  
✅ **Direct Access**: Can bookmark and share specific pages  
✅ **SEO Friendly**: Each page has its own URL  
✅ **Active State**: Sidebar shows current page  
✅ **Mobile Compatible**: Works on mobile devices  

## How It Works

1. **Click Navigation**: Clicking sidebar items navigates to new URLs
2. **Direct URLs**: You can visit `yoursite.com/about` directly
3. **Browser Buttons**: Back/forward buttons work as expected
4. **Page Refresh**: Refreshing on any page maintains that page

## Technical Implementation

- Uses `react-router-dom` for routing
- Each section is wrapped in a page component
- Sidebar uses `useNavigate()` hook for navigation
- Routes are defined in `src/router/AppRouter.tsx`
- Page components are in `src/pages/`

## Files Structure

```
src/
├── router/
│   └── AppRouter.tsx          # Main router configuration
├── pages/                     # Individual page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── CertificationsPage.tsx
│   ├── SkillsPage.tsx
│   ├── ExperiencePage.tsx
│   ├── EducationPage.tsx
│   ├── ProjectsPage.tsx
│   ├── ContactPage.tsx
│   └── ResumePage.tsx
├── components/
│   └── SideNavBarRouter.tsx   # Router-compatible sidebar
└── App.tsx                    # Updated to use AppRouter
```

## Testing URLs

Visit these URLs to test the routing:
- http://localhost:5173/
- http://localhost:5173/about
- http://localhost:5173/projects
- http://localhost:5173/contact
- http://localhost:5173/resume

## Fallback Routing

- Any unknown URL redirects to home (`/`)
- `/home` redirects to `/` for consistency
