module.exports = {
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // https://tailwindcss.com/docs/customizing-colors
      colors: {
        normal: '#374151',
        light: '#e5e7eb',
        primary: '#EA2F3A',
        secondary: '#FA7D12',
        accent: '#FED35F',
        info: '#2194F3',
        success: '#34D399',
        warning: '#FCD34D',
        error: '#EF4444',
        disabled: '#e5e7eb',
      },
      // extend to have spacing for xs, sm, md, lg, etc
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '24px',
        xl: '48px',
        xxl: '68px',
      },
    },
  },
  // https://tailwindcss.com/docs/configuring-variants
  variants: {
    borderColor: ['hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
