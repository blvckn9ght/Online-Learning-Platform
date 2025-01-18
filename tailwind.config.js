module.exports = {
      content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif']
          },
          colors: {
            'muted-gold': '#FFD700',
            'navy-blue': '#003366',
            'light-gray': '#E0E0E0'
          },
          transitionProperty: {
            'colors': 'background-color, border-color, color, fill, stroke'
          }
        },
      },
      plugins: [],
    }
