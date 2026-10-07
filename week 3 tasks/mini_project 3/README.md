# ✍️ Personal Blog Interface (Mini Project 3)

A clean, responsive Personal Blog web application built using **React**, **Props & State**, **Reusable UI Cards**, **Dynamic Rendering via `map()`**, and **Modern CSS**.

---

## 📌 Project Overview
Developed as part of **Week 3 (Day 6-7 Milestone)** of the **MERN Full Stack Internship Program** at **Dr. C. V. Raman University, Khandwa (M.P.)**.

This application enables readers to browse tech articles, filter them dynamically by category, perform real-time search queries across titles and summaries, toggle post expansions ("Read More"), and interact with like buttons.

---

## 📂 Project Structure
```
mini_project3/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Top navigation, brand, and live search bar
│   │   ├── BlogList.js     # Category filters & dynamic list rendering with .map()
│   │   ├── BlogCard.js     # Reusable card with props, 'Read More' toggle & likes
│   │   └── Footer.js       # Responsive multi-column footer with credits
│   ├── App.js              # Main application assembling state & components
│   ├── App.css             # Responsive CSS Grid & Flexbox styling
│   ├── index.js            # React entry point
│   └── index.css           # Global CSS reset & typography
├── package.json
├── .gitignore
└── README.md
```

---

## ✨ Features & Concepts Used

### 1. React Components
- **Navbar:** Sticky header with branding, live search bar, and navigation tabs.
- **BlogList:** Category filter pills and dynamic grid layout.
- **BlogCard:** Reusable UI card component receiving data via props.
- **Footer:** Semantic footer with topic links, program credits, and copyright.

### 2. Props & State Management
- **Props:** Passing structured post objects (`title`, `author`, `date`, `category`, `summary`, `content`, `readTime`, `image`) to `BlogCard`.
- **Search State:** Live search filter updating results instantly.
- **Category Filter State:** Filtering articles by topic (React, JavaScript, CSS, Web Dev, Career).
- **Post Toggle State:** Local state inside each card to expand/collapse full content ("Read More" / "Show Less").
- **Like Counter State:** Interactive like/unlike state per post.

### 3. Dynamic Rendering via `array.map()`
- Iterates over the filtered articles array using `array.map()` with unique `key` props to render `BlogCard` components dynamically.

### 4. Modern CSS Styling
- Responsive **CSS Grid** (`repeat(auto-fill, minmax(340px, 1fr))`) and **Flexbox**.
- Card elevation effects on hover (`translateY(-4px)` with soft shadows).
- CSS custom properties (variables) for consistent colors and radii.

---

## 🚀 How to Run Locally

1. Open terminal and navigate to the project directory:
   ```bash
   cd mini_project3
   ```

2. Install dependencies (if running for the first time):
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👤 Author
- **Akanksha Khede**
- BCA Student • AISECT Internship Program
- Dr. C. V. Raman University, Khandwa (M.P.)
