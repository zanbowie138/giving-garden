import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        theme_green: {
          50: '#a2ad91ff',
          100: '#043830',
          150: '#2e5339ff',
          200: '#3f6e3f',
        },
        theme_pink: {
          50: '#ffccc9ff',
          100: '#ff5666ff'
        }
      }
    },
  },
  plugins: [],
}
export default config
