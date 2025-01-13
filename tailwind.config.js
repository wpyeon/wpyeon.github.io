/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      desktop: "980px",
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Primary brand color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Neutral colors for text, backgrounds, etc.
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        surface: '#fafafa',
        background: '#242424',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-large': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-medium': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-small': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        
        'desktop-heading-1': ['2rem', { lineHeight: '1.3', fontWeight: '700'}],
        'desktop-heading-2': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'desktop-heading-3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],

        'heading-1': ['1.5rem', { lineHeight: '1.3', fontWeight: '700'}],
        'heading-2': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-3': ['1rem', { lineHeight: '1.3', fontWeight: '600' }],
        
        'body-large': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],

        'link': ['0.9rem', { lineHeight: '1.5', fontWeight: '400' }],
        'link-small': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        
        'breadcrumb': ['0.9rem', { lineHeight: '1.5', fontWeight: '400' }],
        'breadcrumb-small': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}

