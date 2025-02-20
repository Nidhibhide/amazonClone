

#  **Amazon UI Clone**

This is a   **Amazon UI Clone** built with **React.js** and **Tailwind CSS**. The project replicates the clean and modern UI of Amazon, featuring product sections, a header, and footer with smooth transitions.



##  **Features**  


 **Dynamic Product Grid Layout**  
 **Styled Header with Navigation Links**  
 **Sticky Footer**  
 **Search Bar with Auto-Complete (Basic Styling)**  
 **Tailwind CSS for Clean and Optimized Styling**  


##  **Getting Started**  

###  **1. Clone the Repository**  
To get started with the project, you first need to clone the repository to your local machine:
```sh
git clone https://github.com/Nidhibhide/amazonClone.git
cd amazonClone
```

###  **2. Install Dependencies**  
Now, install the required dependencies using npm:
```sh
npm install
```

###  **3. Install & Configure Tailwind CSS**  
To use **Tailwind CSS**, follow these steps:

- **Install Tailwind CSS, PostCSS, and Autoprefixer**:
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- **Configure Tailwind in `tailwind.config.js`**:
```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- **Add Tailwind Directives to `src/styles/globals.css`**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

###  **4. Run the Development Server**  
Once everything is set up, run the app on your local server:
```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the app in action.





