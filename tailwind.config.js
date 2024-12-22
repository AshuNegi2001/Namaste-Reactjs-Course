/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    extend: {
      screens: {
        'mob' : {'min': '360px'},
        'xsm' : {'min': '480px'},
        'sm'  : {'min': '640px'},
        'md'  : {'min': '768px'},
        'lg'  : {'min': '1024px'},
        'xl'  : {'min': '1280px'},
        '2xl' : {'min': '1536px'},
      },
    },
  },
  plugins: [],
}


