module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        'pb-3/5': '68.9%'
      },
      colors: {
        "glover-primary": "#372AA4",
        "body-2": "#6C757D;"
      },
      animation: {
        pulse: "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.2,
          }
        }
      }
    }
  },
  variants: {
      extend: {},
  },
  plugins: [],
}