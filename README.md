# 🎬 Stream Vibe

Stream Vibe is a **media streaming web application** built with React and TailwindCSS, inspired by modern OTT platforms.  
The app allows users to explore movies, TV shows, subscription plans, and more — powered by the **TMDB API**.

---

## 🚀 Live Demo

🔗 [View on Vercel](https://stream-vibe-sand.vercel.app/)

---

## 🎨 Design Reference

The UI is based on this Figma design template:  
👉 [Figma Design](https://www.figma.com/design/mQtunEoLctlzqqOQ7uCOhc/OTT-Dark-Theme-Website-UI-Design-Template-for-Media-Streaming--Movies-and-TV---FREE-Editable----Community-?node-id=34-3&t=2UaDW3yZb8HYFMeg-0)

---

## ⚙️ Tech Stack

- ⚛️ **React 19** – Frontend library
- 🎨 **TailwindCSS 4** – Styling
- 🔄 **React Router DOM 7** – Routing
- 📦 **React Query (TanStack)** – Data fetching & caching
- 🌀 **Swiper.js** – Sliders & carousels
- ✅ **Formik + Yup** – Forms & validation
- ⚡ **Vite 6** – Build tool

---

## 📂 Project Structure

    src
    ┣ 📁 Components # Reusable UI components (Layout, Media, Sections, UI)
    ┣ 📁 Contexts # Global context providers
    ┣ 📁 Data # Static JSON files (faqs, plans, devices)
    ┣ 📁 Hooks # Custom hooks (e.g., useIntersection)
    ┣ 📁 Pages # Application pages (see below)
    ┣ 📁 Utils # Utilities (api.js, helpers)
    ┣ App.jsx
    ┣ main.jsx
    ┗ index.css

---

## 📑 Pages (So Far)

- 🏠 **Home Page** – Browse featured content
- 🎬 **Movies Page** – List of movies
- 📺 **Shows Page** – TV shows section
- 🔍 **Search Page** – Search for content
- 💳 **Subscriptions Page** – Plans & pricing
- 📞 **Support Page** – Support & FAQs
- ⚠️ **Not Found Page** – 404 handling

> More sections like **Hero**, **Compare Section (Subscriptions)**, and **Episodes Page** are under development and will be added soon. 🚧

---

## 🔌 API

This project uses the **TMDB API v4** for fetching movies and shows data.  
👉 [TMDB Documentation](https://developer.themoviedb.org/v4/reference/intro/getting-started)

---

## 🛠️ Setup & Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/stream-vibe.git
   cd stream-vibe
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Add .env file with your TMDB API key:
   ```bash
   VITE_TMDB_API_KEY=your_api_key_here
   ```
4. Run the development server

   ```bash
   npm run dev
   ```

5. Build for production

   ```bash
    npm run build
   ```

## 📌 To-Do / Upcoming Features

- Hero section on homepage
- Compare section in subscriptions
- Episodes page for TV shows
- Enhanced search with filters

## 📄 License

This project is for educational & portfolio purposes.
