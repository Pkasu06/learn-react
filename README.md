# learn-react
Read me file

# To create a new project using react

- `npm create vite@latest`

# how to add tailwind in Vite project

- 1) # Navigate to your Project directory: Make sure you are in the coorect project folder.
- 2) # Installing tailwind and other dependencies: 
    `npm install -D tailwindcss postcss autoprefixer`
- 3) # Generate Configuration Files ( tailwind.config.js, postcss.config.js ) : 
    `npx tailwindcss init -p`
- 4) # Configure source/template paths :
    - In `tailwind.config.js` file add this 
        ```
        content: [
            "./index.html",
            "./src/**/*.{html,js,jsx,ts,tsx}"
        ],
        ```
- 5) # Adding Tailwind CSS Directives to your CSS file
    - Add the following Tailwind CSS directives into file index.css or App.css or your most parent css file:
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
# To add React Roter Dom

- `npm install react-router-dom`