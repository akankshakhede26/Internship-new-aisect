# Week 4 - Day 3: Multi-page React App with Routing & ThemeContext 🚀

This is my project for **Week 4 - Day 3** of the internship. It is built using **React**, **React Router**, and **React Context API (ThemeContext)** with light/dark theme switching, persistent storage, and extra themes.

---

## 📋 What I Built

### Part 1: Routing Tasks
- **Task 1 – Multi-page React App**: Created 4 pages (`Home`, `About`, `Contact`, `Dashboard`) connected with `<Routes>` and `<Route>`.
- **Task 2 – Navigation Bar**: Built using `<NavLink>` with active link highlighting (`.nav-link.active`) and a responsive mobile menu.
- **Task 3 – Dynamic Route (`/post/:postId`)**: Uses `useParams()` to dynamically display post ID and navigate between posts.
- **Bonus Add-on – 404 Not Found Page**: Wildcard route `<Route path="*" element={<NotFound />} />` showing `<h2>404 Page Not Found</h2>`.

---

### Part 2: ThemeContext Tasks

#### Task 1 — Implement ThemeContext
- **Created `ThemeContext.js`** using React's `createContext()`:
  ```jsx
  import { createContext } from "react";
  export const ThemeContext = createContext();
  ```
- **Wrapped App with `<ThemeContext.Provider>`**:
  ```jsx
  <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`App ${theme}-theme`}>
      ...
    </div>
  </ThemeContext.Provider>
  ```
- **Stored theme + setTheme in state**: Initialized with `useState` in `App.js`.
- **Added theme classes to App wrapper**: Dynamically sets `className={`App ${theme}-theme`}`.

#### Task 2 — Add a Toggle Button in Navbar
- **Used `useContext(ThemeContext)`** in `Navbar.js` to access `theme` and `setTheme`.
- **Light/Dark Toggle Button**: Switches between `light` and `dark` mode on click.
- **Styled based on current theme**: CSS variables update across all components when theme changes.

#### Optional Add-ons Completed:
✔ **Save theme to localStorage**: The chosen theme persists across page refreshes.  
✔ **Add animations between themes**: Added smooth CSS transitions (`0.3s ease`) on background, color, borders, and shadows.  
✔ **Extra themes**: Added support for `blue`, `green`, and `neon` themes via a selector dropdown in the navbar!

---

## 📁 Folder Structure

```text
week4_day3/
├── public/
│   └── index.html            # HTML entry
├── src/
│   ├── components/
│   │   ├── Navbar.js         # Navbar with NavLink, Theme Toggle & Select
│   │   ├── Navbar.css        # Navbar styles with theme variables
│   │   └── Footer.js         # Simple page footer
│   ├── pages/
│   │   ├── Home.js           # Home page
│   │   ├── About.js          # About page
│   │   ├── Contact.js        # Contact page with simple form
│   │   ├── Dashboard.js      # Dashboard page with routes table
│   │   ├── PostDetail.js     # Dynamic route page using useParams()
│   │   ├── NotFound.js       # 404 Page Not Found component
│   │   └── pages.css         # Theme-adaptive styles for cards, forms, buttons
│   ├── ThemeContext.js       # ThemeContext created using createContext()
│   ├── App.js                # ThemeContext.Provider & Router configuration
│   ├── App.css               # Theme definitions (light, dark, blue, green, neon)
│   ├── index.js              # React DOM entry
│   └── index.css             # Base resets and typography
├── package.json
└── README.md
```

---

## 🏃 How to Run the App

1. Open terminal inside the workspace:
   ```bash
   cd week4_day3
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in your web browser.
