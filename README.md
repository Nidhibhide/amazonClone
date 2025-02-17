# Amazon Clone

This is a fully responsive **Amazon Clone** built with **React.js** and **Tailwind CSS**. The project includes authentication, product listing, a shopping cart, and a checkout system.

## Features
- User Authentication (Login, Register, Logout)
- Product Listing with Categories
- Product Details Page
- Shopping Cart (Add, Remove, Update Items)
- Checkout Process with Payment Integration
- Order History for Users
- Fully Responsive Design using Tailwind CSS



## Installation & Setup
### Step 1: Clone the Repository
```sh
git clone https://github.com/Nidhibhide/amazonClone.git
cd amazonClone
```

### Step 2: Install Dependencies
```sh
npm install
```

### Step 3: Install Tailwind CSS
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 4: Configure Tailwind CSS
Edit `tailwind.config.js` to include content paths:
```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Step 5: Add Tailwind Directives to CSS
Add the following to `src/styles/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 6: Start the Development Server
```sh
npm run dev
```

## Deployment
### Build for Production
```sh
npm run build
```


