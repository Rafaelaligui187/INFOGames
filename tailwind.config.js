/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        j_bold:["Jura-Bold", "sans-serif"],
        Lato_reg:["Lato-Regular","sans-serif"],
        u_light:["Ubuntu-Light", "sans-serif"],
        u_regular:["Ubuntu-Regular","sans-serif"]
      },
      colors: {
        originalColor: '#32D3CA',
      },
    },
  },
  plugins: ["nativewind/babel"],

}

