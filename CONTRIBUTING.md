<div align="center">

# 🤝 Contributing to AWS Cloud Club Website

</div>

Thank you for your interest in contributing to the AWS Cloud Club website! We welcome contributions from the community and are excited to work with you.

## 📋 Table of Contents

- [🚀 Getting Started](#-getting-started)
- [🛠️ Development Setup](#️-development-setup)
- [📝 How to Contribute](#-how-to-contribute)
- [🎨 Code Style Guidelines](#-code-style-guidelines)
- [🔍 Pull Request Process](#-pull-request-process)
- [🐛 Bug Reports](#-bug-reports)
- [✨ Feature Requests](#-feature-requests)
- [📞 Getting Help](#-getting-help)

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0 or higher)
- **npm** or **yarn**
- **Git**
- Basic knowledge of React, JavaScript, and CSS

### Fork and Clone
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/phoenixdev100/aws-cloud-club-website.git
   cd aws-cloud-club-website
   ```

## 🛠️ Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   ```
   http://localhost:5173
   ```

4. **Make your changes and test thoroughly**

## 📝 How to Contribute

### Types of Contributions We Welcome

- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- 🌐 **Accessibility improvements**
- 🔧 **Performance optimizations**
- 🌍 **Internationalization**

### Before You Start

1. **Check existing issues** to see if your contribution is already being worked on
2. **Create an issue** to discuss major changes before implementing them
3. **Follow our coding standards** and project structure

## 🎨 Code Style Guidelines

### JavaScript/React
- Use **functional components** with hooks
- Follow **ES6+** syntax and features
- Use **destructuring** where appropriate
- Implement **proper error handling**

### CSS/Styling
- Use **Tailwind CSS** utility classes
- Follow **mobile-first** responsive design
- Implement **dark mode** support for new components
- Use **consistent spacing** and **color schemes**

### Component Structure
```jsx
import { motion } from 'framer-motion';
import { IconName } from 'lucide-react';

const ComponentName = () => {
  // State and hooks
  const [state, setState] = useState();

  // Event handlers
  const handleEvent = () => {
    // Implementation
  };

  return (
    <motion.section className="py-20 bg-white dark:bg-gray-900">
      {/* Component content */}
    </motion.section>
  );
};

export default ComponentName;
```

### File Naming
- Use **PascalCase** for component files: `ComponentName.jsx`
- Use **camelCase** for utility files: `utilityFunction.js`
- Use **kebab-case** for asset files: `image-name.png`

## 🔍 Pull Request Process

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 2. Make Your Changes
- Write clean, readable code
- Add comments for complex logic
- Test your changes thoroughly
- Ensure dark mode compatibility

### 3. Test Your Changes
```bash
# Run the development server
npm run dev

# Build for production to check for errors
npm run build

# Run linting
npm run lint
```

### 4. Commit Your Changes
Use clear, descriptive commit messages:
```bash
git add .
git commit -m "feat: add dark mode support to Events component"
# or
git commit -m "fix: resolve navbar alignment issue on mobile"
```

### 5. Push and Create PR
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- **Clear title** describing the change
- **Detailed description** of what was changed and why
- **Screenshots** for UI changes
- **Testing instructions** for reviewers

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Screenshots (if applicable)
[Add screenshots here]

## Testing
- [ ] Tested in light mode
- [ ] Tested in dark mode
- [ ] Tested on mobile devices
- [ ] Tested on desktop
- [ ] All existing tests pass

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated if needed
```

## 🐛 Bug Reports

When reporting bugs, please include:

### Required Information
- **Browser** and version
- **Operating System**
- **Device type** (mobile/desktop)
- **Steps to reproduce** the bug
- **Expected behavior**
- **Actual behavior**
- **Screenshots** or screen recordings

### Bug Report Template
```markdown
**Bug Description:**
A clear description of the bug

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Environment:**
- Browser: [e.g., Chrome 91.0]
- OS: [e.g., Windows 10]
- Device: [e.g., iPhone 12, Desktop]

**Screenshots:**
Add screenshots if applicable
```

## ✨ Feature Requests

We love new ideas! When suggesting features:

### Feature Request Guidelines
- **Check existing issues** first
- **Describe the problem** you're trying to solve
- **Explain your proposed solution**
- **Consider alternatives** you've thought about
- **Think about implementation** complexity

### Feature Request Template
```markdown
**Feature Description:**
Clear description of the feature

**Problem Statement:**
What problem does this solve?

**Proposed Solution:**
How should this feature work?

**Alternatives Considered:**
Other solutions you've thought about

**Additional Context:**
Screenshots, mockups, or examples
```

## 📞 Getting Help

### Community Support
- **Discord**: [Join our Discord](https://discord.gg/Eys77mrks5)
- **GitHub Issues**: Create an issue for technical problems
- **Email**: awscloudclub.sharda.univeristy@gmail.com

### Development Help
- **React Documentation**: [reactjs.org](https://reactjs.org)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)
- **Vite Documentation**: [vitejs.dev](https://vitejs.dev)

## 🏆 Recognition

Contributors will be:
- **Listed** in our README
- **Mentioned** in release notes
- **Invited** to join our contributor Discord channel
- **Featured** on our social media (with permission)

## 📄 Code of Conduct

### Our Standards
- **Be respectful** and inclusive
- **Use welcoming** and inclusive language
- **Accept constructive criticism** gracefully
- **Focus on community benefit**
- **Show empathy** towards others

### Unacceptable Behavior
- Harassment or discriminatory language
- Personal attacks or trolling
- Spam or off-topic discussions
- Sharing private information without permission

## 🎉 Thank You!

Every contribution, no matter how small, helps make our project better. We appreciate your time and effort in making the AWS Cloud Club website awesome!

---

**Happy Contributing! 🚀**

*Made with ❤️ by phoenixdev100*
