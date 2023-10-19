import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'green': '#2ecc71',
        'lightGreen': '#36e380',
        'beige': '#f1efe1',
        'white': '#f1f1ee',
        'darkGrey': 'hsl(244, 24%, 26%)',
        'Grey': 'hsl(244, 16%, 43%)',
      },
    },
  },
  plugins: [],
}
export default config
