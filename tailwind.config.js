module.exports = {
  purge: ['./pages/**/*.{js, jsx}', './components/**/*.{js, jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
	borderWidth: ['hover', 'focus'],
	transitionProperty: ['hover', 'focus'],
borderStyle: ['hover', 'focus'],
},
  },
  plugins: [],
}
