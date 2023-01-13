module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        background: '#F4F7FA',
        primary: '#00A2A2',
        secondary: '#161C2D'
      },
      gridTemplateRows: {
        10: 'repeat(10, minmax(0, 1fr))'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
