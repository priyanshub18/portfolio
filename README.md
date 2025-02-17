# Personal Portfolio Website

![Portfolio Preview](https://via.placeholder.com/1200x630)

A modern, interactive portfolio website built with Next.js, Tailwind CSS, and 3D models. This portfolio showcases projects, personal interests, and contact information with elegant animations and interactive elements.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 (App Router) and Tailwind CSS
- **Responsive Design**: Looks great on all devices
- **3D Models**: Interactive 3D elements using Three.js
- **Smooth Animations**: Beautiful transitions and animations using Framer Motion
- **Fast Performance**: Optimized for speed and SEO
- **Interactive UI**: Engaging user experience

## 📋 Sections

1. **Hero Section**: Captivating introduction with 3D elements
2. **Projects Gallery**: Showcase of professional work with filters
3. **Personal Interests**: Hobbies and personal activities with interactive elements
4. **Contact Form**: Easy-to-use form with validation
5. **Footer**: Social links and additional navigation

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - React renderer for Three.js
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
├── app/
│   ├── layout.js           # Root layout
│   ├── page.js             # Home page
│   ├── projects/           # Projects section
│   ├── interests/          # Personal interests section
│   ├── contact/            # Contact section
│   └── globals.css         # Global styles
├── components/
│   ├── 3d/                 # 3D model components
│   ├── animations/         # Animation components
│   ├── ui/                 # UI components
│   └── sections/           # Page sections
├── public/
│   ├── models/             # 3D model files
│   └── images/             # Static images
├── styles/                 # Additional styles
├── lib/                    # Utility functions
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by modifying the `tailwind.config.js` file:

````js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#ff0080',
        // Add your custom colors
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // Add your custom fonts
      },
      // Add other customizations
    },
  },
  plugins: [],
};


## 🚀 Deployment

The project can be easily deployed on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy with a single click

Alternatively, build and export the project for other hosting solutions:

```bash
npm run build
# Output will be in the .next directory
````

## 📱 Responsive Design

The website is fully responsive across all devices. The design adapts to different screen sizes using Tailwind's responsive utilities:

```jsx
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
  {/* Content */}
</div>
```

## 🎮 Interactive Elements

The portfolio includes various interactive elements:

- Hover effects on project cards
- Animated page transitions
- Interactive 3D models that respond to user input
- Parallax scrolling effects
- Custom cursor animations

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- 3D models from [Sketchfab](https://sketchfab.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Inspiration from [Awwwards](https://www.awwwards.com/)
