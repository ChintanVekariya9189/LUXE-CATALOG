# Dynamic Multi-Category Catalog

A premium, responsive web application built with React and Vite that allows users to explore a diverse catalog of products across multiple categories. The application features a dynamic rendering engine that adapts the user interface based on the specific attributes of each product.

## 🚀 Live Demo
**[Live Deployment Link](https://your-deployment-link.vercel.app)**

---

## ✨ Features

- **Category-Based Browsing**: Organized home screen with distinct sections for Cars, Bikes, Phones, and Computers.
- **Dynamic Property Rendering**: An intelligent detail view that automatically iterates through item-specific properties (e.g., "RPM" for cars vs. "Lens Type" for phones).
- **Premium User Experience**: 
  - Glassmorphic UI elements with background blur effects.
  - Smooth, high-performance animations using Framer Motion.
  - Interactive product cards with hover state transformations.
- **Fluid & Responsive**: Optimized for all devices, from mobile phones to wide-screen monitors.
- **SEO Optimized**: Built with semantic HTML for better accessibility and search engine visibility.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Custom Design System)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/dynamic-catalog.git
   cd dynamic-catalog
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
├── src/
│   ├── components/    # Reusable UI components (Layout, ItemCard, etc.)
│   ├── data/          # JSON data sources
│   ├── hooks/         # Custom React hooks (useCatalog)
│   ├── pages/         # Page components (Home, Detail)
│   ├── App.jsx        # Routing and application entry point
│   ├── index.css      # Global styles and design system
│   └── main.jsx       # Framework bootstrap
├── public/            # Static assets
└── data.json          # Raw source data
```

## 📝 Design Philosophy

This project prioritizes a **luxury aesthetic** combined with **technical flexibility**. The styling utilizes CSS variables for consistent theming and glassmorphism to create depth. The dynamic rendering logic ensures that the application remains maintainable even as more product categories and attributes are added to the source JSON.

---
*Created as part of a Frontend Developer Assignment.*
