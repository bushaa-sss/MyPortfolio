# Bushra Saleh - Portfolio Website

A modern, professional portfolio website for a Full-Stack MERN Developer built with React, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design** - Clean, professional dark theme with responsive layout
- 🎬 **Smooth Animations** - Framer Motion animations throughout
- 📱 **Fully Responsive** - Mobile-first approach, perfect on all devices
- ⚡ **Fast Performance** - Optimized for speed with Vite
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- ♿ **Accessible** - Built with accessibility in mind
- 🚀 **Production Ready** - Ready to deploy on Vercel or Railway

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Section.jsx
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

## Tech Stack

- **React.js 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion 10** - Animation library
- **React Icons 4** - Icon library
- **React Scroll** - Smooth scrolling

## Installation

1. **Clone or download the project**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:3000`

## Development

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### File Customization

Update the following files with your actual information:

- **Navbar (src/components/Navbar.jsx)** - Update navigation links if needed
- **Hero (src/sections/Hero.jsx)** - Update name, title, and description
- **About (src/sections/About.jsx)** - Update about text and highlight cards
- **Skills (src/sections/Skills.jsx)** - Update skill categories and items
- **Projects (src/sections/Projects.jsx)** - Update project details and links
- **Contact (src/sections/Contact.jsx)** - Update email, phone, and social links
- **Color Theme (tailwind.config.js)** - Modify colors in the theme section

## Deployment

### Deploy on Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** - Answer questions about your project

Vercel will automatically detect it's a Vite project and configure builds accordingly.

### Deploy on Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Connect your repository** to Netlify via GitHub
3. **Set build command** to `npm run build`
4. **Set publish directory** to `dist`

### Deploy on Railway

1. **Login to Railway**
   ```bash
   railway login
   ```

2. **Initialize project**
   ```bash
   railway init
   ```

3. **Add environment**
   - Select Node.js environment
   - Connect to GitHub repo

4. **Deploy**
   ```bash
   railway up
   ```

## Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'dark-bg': '#0f172a',
  'dark-section': '#111827',
  'dark-card': '#1e293b',
  'primary': '#3b82f6',
  'primary-hover': '#2563eb',
  'text-primary': '#ffffff',
  'text-secondary': '#94a3b8',
  'border-dark': '#334155',
}
```

### Update Social Links

In `src/sections/Contact.jsx`, update the `socialLinks` array:

```javascript
const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    color: 'hover:text-primary',
  },
  // Add more links...
]
```

### Update Navbar Links

In `src/components/Navbar.jsx`, modify the `navLinks` array to add/remove sections.

### Modify Projects

Update the `projects` array in `src/sections/Projects.jsx` with your project details.

## Performance Optimization

- Images are lazy loaded
- Components use React.memo for optimization
- Animations use GPU acceleration (transform/opacity)
- CSS is minified in production builds
- JavaScript is tree-shaken and minified

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Wide: 1440px+

## Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Color contrast meets WCAG standards
- Keyboard navigation support
- Form inputs with proper labels
- Alt text for images

## Environment Variables (Optional)

Create a `.env` file if needed for backend integration:

```env
VITE_API_URL=your_backend_url
```

Access in your code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Troubleshooting

### Port 3000 is already in use
Change the port in `vite.config.js`:
```javascript
server: {
  port: 3001,
}
```

### Build size is large
- Check for unused dependencies
- Optimize images
- Use dynamic imports for code splitting

### Animations are laggy
- Reduce animation complexity
- Use `will-change` CSS property
- Disable animations on lower-end devices

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check existing issues in the repository
2. Create a new issue with detailed description
3. Include screenshots or error messages

## Future Enhancements

- Add dark/light theme toggle
- Implement contact form backend integration
- Add blog section
- Add testimonials carousel
- Add case studies
- Implement analytics

---

**Built with ❤️ by Bushra Saleh**

Ready to deploy? Choose your platform above and follow the deployment steps!
