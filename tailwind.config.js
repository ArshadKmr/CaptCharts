/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}",];
export const theme = {
  extend: {
    colors: {
      primary: '#CF796C'
    },
    textColor: {
      primary: '#CF796C'
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'], // Define Poppins as primary font
    },
    fontWeight: {
      medium: 500, // Add the 'medium' weight for Poppins
    },
  },
};