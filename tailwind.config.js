/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* gray-500 with opacity */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* custom deep forest green */
        background: 'var(--color-background)', /* gray-50 */
        foreground: 'var(--color-foreground)', /* custom dark green-black */
        primary: {
          DEFAULT: 'var(--color-primary)', /* custom deep forest green */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* custom sophisticated teal-blue */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* gray-50 */
          foreground: 'var(--color-muted-foreground)', /* gray-500 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* custom warm amber */
          foreground: 'var(--color-accent-foreground)', /* custom dark green-black */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)', /* custom dark green-black */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)', /* custom dark green-black */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-500 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-500 */
          foreground: 'var(--color-warning-foreground)', /* custom dark green-black */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'heading': ['Inter', 'sans-serif'],
        'caption': ['Nunito Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: '8px',
        md: '6px',
        sm: '4px',
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '600': '600ms',
        '800': '800ms',
      },
      backdropBlur: {
        'sm': '4px',
      },
      zIndex: {
        'header': '1000',
        'dropdown': '1100',
        'modal': '1200',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}