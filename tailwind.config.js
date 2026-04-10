export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Roboto"', 'sans-serif'],
      },
      letterSpacing: {
        'wider-md': '0.15em',
      },
    },
  },
  plugins: [],
}