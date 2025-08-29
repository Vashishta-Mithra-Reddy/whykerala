# 🏝️ Why Kerala?

**A modern, interactive web experience showcasing Kerala - God's Own Country**

![WhyKerala Homepage](https://github.com/user-attachments/assets/7399def9-e1ad-425b-b6f6-1b32b34da312)

*An immersive journey through Kerala's stunning landscapes, rich culture, delicious cuisine, and travel opportunities.*

---

## 🌟 Overview

**Why Kerala?** is an interactive tourism showcase built with modern web technologies that answers the timeless question: "Why should I visit Kerala?" Through stunning visuals, interactive components, and engaging animations, this application takes visitors on a digital tour of Kerala's most compelling attractions.

Whether you're planning a trip, exploring travel options, or simply curious about Kerala's beauty, this application provides an engaging way to discover:
- 🖼️ **Breathtaking landscapes** through infinite image galleries
- 🚂 **Transportation options** with interactive pixel transitions  
- 🌤️ **Weather comparisons** between your location and Kerala
- 📍 **Places to visit** with integrated Google Maps
- 🍛 **Authentic Kerala cuisine** with detailed descriptions

---

## ✨ Key Features

### 🎨 **Interactive Image Galleries**
- Infinite horizontal scrolling showcasing Kerala's landscapes
- Dual-direction image sliders with smooth animations
- High-quality photographs of Kerala's natural beauty

### 🚌 **Dynamic Transport Options**
- **Pixel Transition Effects**: Hover/click cards to reveal transport modes
- **Transportation Types**: Train 🚂, Bike 🏍️, and Bus 🚌 options
- Smooth animations with custom pixel-art style transitions

### 🌡️ **Weather Comparison Tool**
- **Real-time Weather API**: Compare your location's weather with Kerala
- **Interactive Input**: Enter any city worldwide for comparison
- **Smart Messaging**: Personalized weather-based travel recommendations

### 🗺️ **Places Integration**
- **Google Maps Integration**: Custom map with curated Kerala destinations
- Direct link to detailed location guide
- Curated selection of must-visit places

### 🍜 **Kerala Cuisine Showcase**
- **Interactive Food Gallery**: 8 authentic Kerala dishes with descriptions
- **Hover Effects**: Detailed descriptions appear on image hover
- Traditional foods: Puttu, Sadhya, Payasam, and more

### 🎯 **Modern UX/UI Features**
- **Dark/Light Theme**: Toggle with sound effects
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: GSAP-powered transitions and effects
- **Custom Typography**: Satoshi font family for modern aesthetics

---

## 🛠️ Technology Stack

### **Frontend Framework**
- **[Next.js 15.3.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### **Styling & Animation**
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind Animated](https://tailwindcss-animated.com/)** - Animation utilities
- **[GSAP](https://gsap.com/)** - Professional-grade animations
- **[Framer Motion](https://motion.dev/)** - React animation library

### **UI/UX Libraries**
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[use-sound](https://use-sound.dev/)** - Sound effects integration

### **Additional Features**
- **Weather API Integration** - Real-time weather data
- **Google Maps Integration** - Custom location mapping
- **Custom Fonts** - Satoshi variable font
- **React Hooks** - Modern state management

---

## 🚀 Getting Started

### **Prerequisites**
- **Node.js 18+** (recommended: latest LTS)
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vashishta-Mithra-Reddy/whykerala.git
   cd whykerala
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or  
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### **Build for Production**
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
whykerala/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 fonts/             # Custom fonts (Satoshi)
│   ├── globals.css           # Global styles & Tailwind
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Main homepage component
├── 📁 components/            # Reusable React components
│   ├── FoodsThingy.tsx       # Kerala cuisine showcase
│   ├── ImagesThingy.tsx      # Image galleries with infinite scroll
│   ├── PlacesThingy.tsx      # Google Maps integration
│   ├── TransportThingy.tsx   # Transport options with animations
│   ├── WeatherThingy.tsx     # Weather comparison tool
│   ├── header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   ├── theme-switcher.tsx    # Dark/light mode toggle
│   ├── 📁 motion-primitives/ # Animation components
│   └── 📁 PixelTransition/   # Pixel effect components  
├── 📁 public/               # Static assets
│   ├── 📁 foods/           # Food images for cuisine section
│   ├── kerala*.jpg         # Kerala landscape images
│   ├── click.wav           # Sound effect for interactions
│   └── whykerala.png       # App icon
├── 📁 lib/                 # Utility functions
└── 🔧 Config files         # Next.js, Tailwind, TypeScript configs
```

---

## 🔧 Component Guide

### **🖼️ ImagesThingy**
```tsx
// Infinite scrolling image galleries
- Dual-direction sliders (normal + reverse)
- 18+ curated Kerala landscape images
- Smooth CSS animations with intersection observer
```

### **🚌 TransportThingy**
```tsx
// Interactive transport showcase
- PixelTransition components for Train/Bike/Bus
- Hover effects reveal transport emojis
- Custom pixel-art style animations
```

### **🌡️ WeatherThingy**  
```tsx
// Weather comparison functionality
- WeatherAPI integration for real-time data
- Compares user input location vs Kerala (Munnar)
- Smart conditional messaging based on temperature
```

### **🗺️ PlacesThingy**
```tsx
// Google Maps integration
- Custom Google Maps link with curated locations
- External link with arrow icon animation
- Responsive design for mobile/desktop
```

### **🍛 FoodsThingy**
```tsx
// Kerala cuisine showcase
- Grid layout with 8 traditional dishes
- Hover effects reveal detailed descriptions
- Next.js Image optimization for performance
```

---

## 🎨 Customization Guide

### **Colors & Theme**
```css
/* app/globals.css - Custom color variables */
:root {
  --redx: lch(33.71% 56.31 20.42);     /* Primary red */
  --whitex: lch(88.91% 13.54 71.58);   /* Warm white */  
  --yellowx: lch(81.82% 79.69 80.88);  /* Accent yellow */
}
```

### **Adding New Images**
1. Add images to `/public/` directory
2. Reference in components: `src="/your-image.jpg"`
3. For infinite sliders: Update `ImagesThingy.tsx` component

### **Weather API Configuration**
```tsx
// components/WeatherThingy.tsx
const API_KEY = "your-weatherapi-key"; // Replace with your key
```

### **Google Maps Customization**
```tsx
// components/PlacesThingy.tsx  
const mapUrl = "your-custom-google-maps-url"; // Update map URL
```

---

## 🌍 Deployment

### **Vercel (Recommended)**
1. Connect repository to [Vercel](https://vercel.com/)
2. Configure environment variables if needed
3. Deploy automatically on push

### **Other Platforms**
- **Netlify**: `npm run build` → Deploy `/dist` folder
- **AWS/Azure**: Use container deployment with `Dockerfile`
- **Traditional Hosting**: Build static export with `output: 'export'`

### **Environment Variables**
```bash
# .env.local (optional)
WEATHER_API_KEY=your_weatherapi_key
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### **Getting Started**
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit changes**: `git commit -m 'Add amazing feature'`
5. **Push to branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### **Contribution Ideas**
- 🖼️ Add more Kerala images to galleries
- 🍽️ Expand the food section with recipes
- 🏛️ Add cultural events and festivals section
- 📱 Improve mobile responsiveness
- ♿ Enhance accessibility features
- 🌐 Add internationalization (i18n)

### **Code Style**
- Use TypeScript for type safety
- Follow existing component patterns
- Add comments for complex logic
- Test on multiple devices/browsers

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits & Acknowledgments

### **Photography**
- Kerala tourism images courtesy of Kerala Tourism Board
- Food photography from various Kerala cuisine sources

### **Technologies**  
- Built with [Next.js](https://nextjs.org/) by Vercel
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [GSAP](https://gsap.com/) and [Framer Motion](https://motion.dev/)
- Weather data from [WeatherAPI](https://weatherapi.com/)

### **Inspiration**
Created with ❤️ to showcase the incredible beauty and culture of Kerala - truly God's Own Country.

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Vashishta-Mithra-Reddy/whykerala/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Vashishta-Mithra-Reddy/whykerala/discussions)
- **Email**: Create an issue for support requests

---

*Made with ❤️ for Kerala Tourism • [Visit Kerala](https://www.keralatourism.org/) • [Live Demo](https://whykerala.vercel.app/)*
