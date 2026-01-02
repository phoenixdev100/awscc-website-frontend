<div align="center">

# 🌩️ AWS Cloud Club - Sharda University

</div>

<div align="center">
  <img src="https://img.shields.io/badge/AWS-Cloud%20Club-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS Cloud Club">
  <img src="https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="MIT License">
</div>

<div align="center">
  <h3>🚀 Empowering the next generation of cloud professionals through hands-on learning and community building</h3>
  <p>
    <a href="https://github.com/phoenixdev100/aws-cloud-club-website">🌟 Star this repo</a> •
    <a href="#-quick-start">🚀 Quick Start</a> •
    <a href="#-features">✨ Features</a> •
    <a href="#-contributing">🤝 Contributing</a>
  </p>
</div>

---

## 📋 Table of Contents

- [🎯 About](#-about)
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🛠️ Tech Stack](#️-tech-stack)
- [📱 Screenshots](#-screenshots)
- [🎨 Dark Mode](#-dark-mode)
- [📂 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👥 Team](#-team)

## 🎯 About

The **AWS Cloud Club at Sharda University** is a vibrant student-driven community focused on cloud computing education, hands-on learning, and professional development. Our modern, responsive website showcases our activities, events, and provides a platform for students to connect with the cloud computing community.

### 🎓 Our Mission
- **Educate**: Provide comprehensive AWS cloud computing education
- **Connect**: Build a strong community of cloud enthusiasts
- **Innovate**: Foster innovation through hands-on projects
- **Certify**: Support students in achieving AWS certifications

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Layout**: Perfect on all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with smooth animations
- **Glassmorphism Effects**: Modern UI with backdrop blur effects
- **Smooth Animations**: Framer Motion powered interactions

### 📱 **Core Sections**
- **Hero Section**: Eye-catching landing with animated AWS services
- **About Us**: Club information with statistics and mission
- **Events**: Upcoming workshops, seminars, and past activities
- **Social Links**: Connect across multiple platforms
- **Contact Form**: Get in touch with the community
- **Footer**: Quick links and social media integration

### 🌙 **Dark Mode Support**
- **System Preference Detection**: Automatically detects user's theme preference
- **Persistent Storage**: Remembers user's choice across sessions
- **Smooth Transitions**: Animated theme switching
- **Consistent Styling**: All components support both themes

### 🔗 **Social Integration**
- **Discord Community**: Real-time chat and discussions
- **WhatsApp Groups**: Quick updates and notifications
- **Meetup Events**: Event registration and management
- **Social Media**: Twitter, LinkedIn, Instagram presence

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18.0 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/phoenixdev100/aws-cloud-club-website.git
   cd aws-cloud-club-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **JavaScript (ES6+)** - Modern JavaScript features

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icon library

### **Development Tools**
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### **Deployment**
- **Vite Build** - Optimized production builds
- **Static Hosting** - Compatible with Netlify, Vercel, GitHub Pages

## 🎨 Dark Mode

Our website features a comprehensive dark mode implementation:

### **Theme Toggle**
- Located in the navbar (both desktop and mobile)
- Animated sun/moon icons with smooth transitions
- Accessible with proper ARIA labels

### **Theme Persistence**
- Automatically detects system preference
- Saves user choice in localStorage
- Consistent across page reloads

### **Implementation Details**
```javascript
// Theme Context provides global state management
const { isDark, toggleTheme } = useTheme();

// Tailwind CSS dark mode classes
className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
```

## 📂 Project Structure

```
aws-cloud-club-website/
├── 📁 public/                 # Static assets
│   └── vite.svg
├── 📁 src/                    # Source code
│   ├── 📁 components/         # React components
│   │   ├── About.jsx          # About section
│   │   ├── Contact.jsx        # Contact form & info
│   │   ├── Events.jsx         # Events & activities
│   │   ├── Footer.jsx         # Footer component
│   │   ├── Hero.jsx           # Landing section
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── SocialLinks.jsx    # Social media links
│   │   └── ThemeToggle.jsx    # Dark mode toggle
│   ├── 📁 contexts/           # React contexts
│   │   └── ThemeContext.jsx   # Theme state management
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global styles
│   ├── index.css              # Tailwind imports
│   └── main.jsx               # App entry point
├── 📄 index.html              # HTML template
├── 📄 package.json            # Dependencies & scripts
├── 📄 tailwind.config.js      # Tailwind configuration
├── 📄 vite.config.js          # Vite configuration
├── 📄 eslint.config.js        # ESLint configuration
├── 📄 postcss.config.js       # PostCSS configuration
├── 📄 README.md               # This file
└── 📄 LICENSE                 # MIT License
```

## 🔧 Configuration

### **Tailwind CSS**
Custom configuration with AWS brand colors:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'aws-orange': '#FF9900',
        'cloud-cyan': '#00D4FF',
      }
    }
  }
}
```

### **Vite Configuration**
Optimized for development and production:

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['your-ngrok-domain.ngrok-free.app'],
    host: true
  }
})
```

## 🚀 Deployment

### **Netlify (Recommended)**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on push

### **Vercel**
```bash
npm i -g vercel
vercel --prod
```

### **GitHub Pages**
```bash
npm run build
# Deploy the dist/ folder to gh-pages branch
```

### **Manual Deployment**
```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Getting Started**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### **Development Guidelines**
- Follow the existing code style
- Use meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed

### **Areas for Contribution**
- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- 🌐 Accessibility improvements
- 🔧 Performance optimizations

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 phoenixdev100

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👥 Team

### **AWS Cloud Club - Sharda University**
- **Website**: [AWS Cloud Club SU](https://aws-cloud-club-su.netlify.app)
- **Email**: awscloudclub.sharda.univeristy@gmail.com
- **Location**: Sharda University, Greater Noida, India

### **Developer**
- **GitHub**: [@phoenixdev100](https://github.com/phoenixdev100)
- **Project Repository**: [aws-cloud-club-website](https://github.com/phoenixdev100/aws-cloud-club-website)

### **Connect With Us**
<div align="center">
  <a href="https://discord.gg/Eys77mrks5">
    <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord">
  </a>
  <a href="https://chat.whatsapp.com/IVxC3m2QF3t3W66dEswyyJ">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>
  <a href="https://www.meetup.com/aws-cloud-club-at-sharda-university">
    <img src="https://img.shields.io/badge/Meetup-ED1C40?style=for-the-badge&logo=meetup&logoColor=white" alt="Meetup">
  </a>
  <a href="https://x.com/awscloudclubsu">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter">
  </a>
  <a href="https://www.linkedin.com/company/aws-cloud-club-sharda-university">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://www.instagram.com/aws_cloud_club_su/">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
  </a>
</div>

---

<div align="center">
  <p><strong>⭐ Star this repository if you found it helpful!</strong></p>
  <p>Made with ❤️ by phoenixdev100</p>
  <p>© 2025 AWS Cloud Club - Sharda University. All rights reserved.</p>
</div>
