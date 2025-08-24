# 🌸 Thai with Sarah - Modern Thai Learning Platform

A beautiful, modern website for learning Thai language with Sarah. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

![Thai with Sarah](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Modern Design & UI**
- **Beautiful gradients** and color schemes
- **Smooth animations** with Framer Motion
- **Responsive design** for all devices
- **Dark/Light mode** support
- **Glassmorphism effects** and backdrop blur
- **Interactive hover states** and micro-animations

### 🚀 **Core Functionality**
- **Landing page** with hero section and value propositions
- **Blog system** with categories and search
- **Testimonials** showcasing student success stories
- **Pricing plans** with feature comparison
- **Authentication system** (signup/signin)
- **Responsive navigation** with mobile menu
- **Footer** with social links and information

### 🎯 **Learning Features**
- **Curriculum preview** with learning paths
- **Student statistics** and success metrics
- **Category-based content** organization
- **Progress tracking** visualization
- **Community features** and support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript 5
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📁 Project Structure

```
thai-with-sarah/
├── app/                          # Next.js App Router
│   ├── auth/                     # Authentication pages
│   │   ├── signin/              # Sign in page
│   │   └── signup/              # Sign up page
│   ├── blog/                     # Blog listing page
│   ├── pricing/                  # Pricing plans page
│   ├── testimonials/             # Student testimonials page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                    # Reusable components
│   ├── ui/                       # UI components (Radix)
│   ├── footer.tsx                # Footer component
│   ├── navbar.tsx                # Navigation component
│   ├── section.tsx               # Section wrapper
│   ├── theme-provider.tsx        # Theme context
│   └── theme-toggle.tsx          # Theme switcher
├── hooks/                         # Custom React hooks
├── lib/                          # Utility functions
├── public/                       # Static assets
└── styles/                       # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/thai-with-sarah.git
   cd thai-with-sarah
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Color Palette

- **Primary**: Blue gradients (`blue-500` to `purple-500`)
- **Secondary**: Pink gradients (`purple-500` to `pink-500`)
- **Accent**: Green gradients (`green-500` to `emerald-500`)
- **Neutral**: Slate scale (`slate-50` to `slate-900`)

### Typography

- **Headings**: Large, bold with gradient text effects
- **Body**: Clean, readable with proper contrast
- **Accent**: Gradient text for highlights and CTAs

### Components

- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Gradient backgrounds with hover animations
- **Badges**: Color-coded with subtle backgrounds
- **Forms**: Clean inputs with proper focus states

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🌙 Dark Mode

- **Automatic detection** of system preference
- **Manual toggle** in navigation
- **Persistent** across sessions
- **Optimized colors** for both themes

## 🎭 Animations

### Framer Motion Features
- **Stagger animations** for lists and grids
- **Hover effects** with scale and translate
- **Page transitions** with smooth animations
- **Loading states** with skeleton components

### CSS Animations
- **Gradient shifts** on hover
- **Floating elements** with subtle movement
- **Shadow transitions** for depth
- **Color transitions** for smooth state changes

## 🔧 Customization

### Adding New Pages

1. Create a new folder in `app/`
2. Add `page.tsx` with your component
3. Import and use the `Section` component for consistent spacing
4. Follow the existing design patterns

### Modifying Styles

- **Global styles**: Edit `app/globals.css`
- **Component styles**: Use Tailwind classes in components
- **Custom CSS**: Add to `styles/` folder if needed

### Adding New Components

1. Create component file in `components/`
2. Export as default function
3. Import and use in pages
4. Follow the existing component structure

## 📊 Performance

- **Image optimization** with Next.js Image component
- **Code splitting** with dynamic imports
- **Optimized fonts** and assets
- **Lazy loading** for better performance

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms

- **Netlify**: Build command: `npm run build`
- **Railway**: Use the Next.js template
- **Docker**: Build and deploy container

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all components
- Follow the existing component structure
- Use Tailwind CSS for styling
- Add proper TypeScript types
- Include proper error handling

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Radix UI** for accessible component primitives
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons

## 📞 Support

- **Email**: support@thaiwithsarah.com
- **Documentation**: [docs.thaiwithsarah.com](https://docs.thaiwithsarah.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/thai-with-sarah/issues)

## 🔮 Roadmap

- [ ] **User Dashboard** with progress tracking
- [ ] **Interactive Lessons** with audio and video
- [ ] **Progress Analytics** and insights
- [ ] **Mobile App** (React Native)
- [ ] **AI-powered** learning recommendations
- [ ] **Community Forum** for students
- [ ] **Live Tutoring** sessions
- [ ] **Gamification** with achievements

---

**Made with ❤️ by the Thai with Sarah team**

*Empowering students to master Thai language through modern, effective learning methods.*
