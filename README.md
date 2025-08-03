# Syed Affan - Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and professional experience.

## 🚀 Live Demo

[View Portfolio](https://your-deployment-url.com/syed-affan)

## ✨ Features

- **Modern Design**: Clean, professional design with glassmorphic effects
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Reveal animations and hover effects
- **Contact Form**: Functional contact form with EmailJS integration
- **Loading Screen**: Animated loading screen with typing effect
- **Dark Theme**: Elegant dark theme with blue accent colors
- **Social Links**: Direct links to GitHub, LinkedIn, and LeetCode profiles

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Vite 7.0.4
- **Email Service**: EmailJS
- **Icons**: Custom SVG icons
- **Fonts**: Space Grotesk, JetBrains Mono

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── LoadingScreen.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Navbar.jsx
│   │   ├── RevealOnScroll.jsx
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── Contact.jsx
│   │       ├── Home.jsx
│   │       └── Projects.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.cjs
```

## 🎯 Sections

### Home

- Personal introduction
- Social media links (GitHub, LinkedIn, LeetCode)
- Call-to-action buttons

### About

- Skills categorized by technology areas
- Educational background
- Professional summary

### Projects

- Featured projects with descriptions
- Technology stack for each project
- Links to GitHub repositories

### Contact

- Contact form with EmailJS integration
- Success/error handling
- Form validation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Affan166114/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   VITE_SERVICE_ID=your_emailjs_service_id
   VITE_TEMPLATE_ID=your_emailjs_template_id
   VITE_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173/syed-affan`

## 📧 EmailJS Setup

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template
4. Get your Public Key
5. Add the credentials to your `.env` file

## 🎨 Customization

### Colors

The portfolio uses a blue-cyan gradient theme. You can customize colors in:

- `tailwind.config.cjs` for global theme
- Individual component files for specific styling

### Content

Update the following files to personalize your portfolio:

- `src/Components/sections/Home.jsx` - Personal information
- `src/Components/sections/About.jsx` - Skills and education
- `src/Components/sections/Projects.jsx` - Project details
- `src/Components/sections/Contact.jsx` - Contact form

### Social Links

Update your social media links in `src/Components/sections/Home.jsx`:

- GitHub: `https://github.com/Affan166114`
- LinkedIn: `https://www.linkedin.com/in/syed-affan-89218b261/`
- LeetCode: `https://leetcode.com/u/syed166114/`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set the base path to `/syed-affan`
4. Deploy

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set the base path in site settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Name**: Syed Affan
- **Email**: [Your Email]
- **LinkedIn**: [https://www.linkedin.com/in/syed-affan-89218b261/](https://www.linkedin.com/in/syed-affan-89218b261/)
- **GitHub**: [https://github.com/Affan166114](https://github.com/Affan166114)
- **LeetCode**: [https://leetcode.com/u/syed166114/](https://leetcode.com/u/syed166114/)

---

⭐ If you found this portfolio helpful, please give it a star!
