/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'aws-orange': '#FF9900',
        'aws-blue': '#232F3E',
        'aws-light-blue': '#4A90E2',
        'cloud-purple': '#6B46C1',
        'cloud-pink': '#EC4899',
        'cloud-cyan': '#00D4FF',
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2',
      },
      backgroundImage: {
        'cloud-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'aws-gradient': 'linear-gradient(135deg, #FF9900 0%, #232F3E 100%)',
        'purple-gradient': 'linear-gradient(135deg, #6B46C1 0%, #EC4899 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
