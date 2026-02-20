# Customization Guide

Complete guide to customize every aspect of your portfolio website.

## Quick Customization Checklist

- [ ] Update name in Navbar
- [ ] Update hero section content
- [ ] Update about section
- [ ] Add your skills
- [ ] Add your projects
- [ ] Update contact information
- [ ] Update social media links
- [ ] Change color theme (optional)
- [ ] Update favicon
- [ ] Deploy to your domain

## 1. Update Personal Information

### Navbar & Hero Section

**File:** `src/sections/Hero.jsx`

```javascript
// Update the hero heading
<h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4 leading-tight">
  Your Full Name - Your Title
</h1>

// Update subheading
<p className="text-xl md:text-2xl text-primary font-semibold mb-4">
  Your Subtitle | Your Specialty
</p>

// Update description
<p className="text-lg text-text-secondary mb-8 max-w-xl leading-relaxed">
  Your professional description here...
</p>
```

### Navbar Name

**File:** `src/components/Navbar.jsx`

```javascript
<a href="#hero" className="text-2xl md:text-3xl font-bold text-primary">
  Your Name Here
</a>
```

## 2. Update About Section

**File:** `src/sections/About.jsx`

### Update About Text

```javascript
<motion.p className="text-text-secondary text-lg max-w-3xl mx-auto text-center mb-12">
  Your about text here...
</motion.p>
```

### Update Highlight Cards

Modify the highlights array:

```javascript
const highlights = [
  {
    icon: HiCode,
    title: 'Your Title',
    description: 'Your description of what you do.',
  },
  // Keep or modify other cards
]
```

### Add More Cards

Add more objects to the highlights array. Available icons from `react-icons`:
- `HiCode` - Code
- `HiSparkles` - Sparkles
- `HiLightBulb` - Light Bulb
- `HiRocket` - Rocket
- `HiZoom` - Zoom
- `HiCheck` - Check mark

## 3. Update Skills Section

**File:** `src/sections/Skills.jsx`

Update the `skillCategories` array:

```javascript
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      'Skill 1',
      'Skill 2',
      'Skill 3',
      // Add more skills
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Skill 1',
      'Skill 2',
      // Add more skills
    ],
  },
  // Add or remove categories
]
```

**Recommendation:** Keep skills concise and ordered by proficiency level.

## 4. Update Projects Section

**File:** `src/sections/Projects.jsx`

Update the `projects` array:

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'What the project does...',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    highlights: [
      'Key feature 1',
      'Key feature 2',
      'Key feature 3',
    ],
    image: '🎯', // Use emoji or update to use image
    github: 'https://github.com/username/repo',
    demo: 'https://project-demo.com',
  },
  // Add more projects
]
```

### Project Images

Replace emojis with actual images:

```javascript
// Option 1: Use public image
image: '/images/project1.jpg',

// In Card component, update the image section:
<img
  src={project.image}
  alt={project.title}
  className="w-full h-64 object-cover rounded-xl"
/>
```

Place images in `public/images/` folder.

## 5. Update Contact Information

**File:** `src/sections/Contact.jsx`

### Update Email

```javascript
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
```

### Update Phone

```javascript
<a href="tel:+1234567890">
  +1 (234) 567-890
</a>
```

### Update Social Links

```javascript
const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    color: 'hover:text-primary',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    color: 'hover:text-primary',
  },
  {
    icon: FiTwitter,
    label: 'Twitter',
    href: 'https://twitter.com/yourhandle',
    color: 'hover:text-primary',
  },
]
```

Available social icons:
- `FiGithub` - GitHub
- `FiLinkedin` - LinkedIn
- `FiTwitter` - Twitter
- `FiMail` - Email
- `FiExternalLink` - External Link

## 6. Customize Colors

**File:** `tailwind.config.js`

Edit the colors object:

```javascript
colors: {
  'dark-bg': '#your-color',
  'dark-section': '#your-color',
  'dark-card': '#your-color',
  'primary': '#your-accent-color',
  'primary-hover': '#your-hover-color',
  'text-primary': '#your-text-color',
  'text-secondary': '#your-secondary-text',
  'border-dark': '#your-border-color',
}
```

### Recommended Color Palettes

**Blue Theme (Current)**
- Primary: #3b82f6
- Hover: #2563eb

**Green Theme**
- Primary: #10b981
- Hover: #059669

**Purple Theme**
- Primary: #a855f7
- Hover: #9333ea

**Red Theme**
- Primary: #ef4444
- Hover: #dc2626

**Teal Theme**
- Primary: #14b8a6
- Hover: #0d9488

## 7. Add Favicon

**File:** `index.html`

Add favicon to the `<head>` section:

```html
<link rel="icon" type="image/png" href="src/assets/favicon.png" />
<link rel="apple-touch-icon" href="src/assets/apple-touch-icon.png" />
```

Place `favicon.png` in `src/assets/` folder.

## 8. Update Meta Information

**File:** `index.html`

```html
<meta name="description" content="Your professional description" />
<meta name="keywords" content="your, keywords, here" />
<meta name="author" content="Your Name" />
<title>Your Name - Your Title</title>
```

## 9. Modify Navigation Links

**File:** `src/components/Navbar.jsx`

Update the `navLinks` array:

```javascript
const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
  // Add more sections if needed
]
```

Make sure section IDs in files match the `to` values.

## 10. Customize Animations

**File:** `src/components/` and `src/sections/`

### Control Animation Delays

```javascript
// Increase delay for staggered animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }} // Adjust delay
>
  Content
</motion.div>
```

### Reduce Animation Intensity

```javascript
// For hover animations
whileHover={{ scale: 1.05 }} // Reduce from 1.1 to 1.05
whileHover={{ translateY: -4 }} // Reduce from -8 to -4
```

### Disable Animations

For performance, wrap animations with a condition:

```javascript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

<motion.div
  animate={prefersReducedMotion ? {} : { y: [0, -20, 0] }}
>
  Content
</motion.div>
```

## 11. Add New Sections

To add a new section:

1. **Create component** in `src/sections/NewSection.jsx`
2. **Use Section wrapper**:

```javascript
import Section from '../components/Section'

export default function NewSection() {
  return (
    <Section id="newsection" title="Section Title" dark={true}>
      {/* Your content */}
    </Section>
  )
}
```

3. **Import in App.jsx**:

```javascript
import NewSection from './sections/NewSection'

// Add to JSX:
<NewSection />
```

4. **Add to navbar** in `src/components/Navbar.jsx`

## 12. Optimize Images

Use optimized image formats:

```bash
# Install image optimization tools
npm install sharp

# Convert images to WebP
convert image.jpg -quality 80 image.webp
```

Serve WebP with fallback:

```javascript
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="description" />
</picture>
```

## 13. Form Customization

**File:** `src/sections/Contact.jsx`

### Connect to Backend API

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setSubmitStatus('success')
    }
  } catch (error) {
    setSubmitStatus('error')
  }
  setIsSubmitting(false)
}
```

### Add More Form Fields

```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '', // Add new field
  message: '',
})

// Add input in JSX
<input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Subject"
/>
```

## 14. Add Custom Fonts

**File:** `src/styles/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Mons:wght@400;600;700&display=swap');

body {
  font-family: 'Mons', sans-serif;
}
```

Update `tailwind.config.js`:

```javascript
theme: {
  fontFamily: {
    sans: ['Mons', 'sans-serif'],
  },
}
```

## 15. Mobile-First Responsive Design

All components are already mobile-first. Test with:

```bash
npm run dev
# Open localhost:3000 and use browser DevTools
```

Custom breakpoints:

```javascript
// In components
className="text-sm md:text-base lg:text-lg xl:text-xl"

// Tailwind breakpoints:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

## Environment Variables

Create `.env.local`:

```env
VITE_API_URL=https://api.example.com
VITE_EMAIL_SERVICE_KEY=your_key_here
```

Use in code:

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Performance Tips

1. **Lazy load components**:
```javascript
import { lazy, Suspense } from 'react'
const Projects = lazy(() => import('./sections/Projects'))

<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

2. **Optimize animations**:
- Use `will-change` CSS property
- Reduce opacity/transform animations
- Avoid animating layout properties

3. **Image optimization**:
- Use WebP format
- Set proper dimensions
- Use lazy loading

4. **Code splitting**:
- Let Vite handle it automatically
- Use dynamic imports for heavy libraries

## Testing

Test your portfolio:

```bash
# Local testing
npm run dev

# Production build
npm run build
npm run preview
```

Test on different:
- Browsers (Chrome, Firefox, Safari, Edge)
- Devices (Desktop, Tablet, Mobile)
- Network speeds (use DevTools throttling)
- Screen readers (VoiceOver, NVDA)

---

**Need help?** Check the main README.md for deployment and support options.
