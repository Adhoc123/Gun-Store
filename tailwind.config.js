/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6be073",
        
"secondary": "#6e4fea",
        
"accent": "#ea969b",
        
"neutral": "#2C2037",
        
"base-100": "#2D3D5D",
        
"info": "#538BD0",
        
"success": "#24E0AE",
        
"warning": "#F9CB4D",
        
"error": "#FA5252",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
