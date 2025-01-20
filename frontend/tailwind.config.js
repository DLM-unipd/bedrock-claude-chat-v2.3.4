/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['M PLUS Rounded 1c'],
    },
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      animation: {
        fastPulse: 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        'aws-squid-ink': '#910606',
        //'aws-squid-ink': '#232F3E',   laterale sinistro
        'aws-sea-blue': '#5c0202',
        // 'aws-sea-blue': '#005276',       menu, riquadro algoritmo, icone 'inviare un messaggio'
        'aws-sea-blue-hover': '#5c0303',
        // 'aws-sea-blue-hover': '#003550',   riquadro quandio passi su 'bot console' ecc.
        'aws-aqua': '#007faa',
        'aws-lab': '#38ef7d',
        'aws-mist': '#9ffcea',
        'aws-font-color': '#1c1c1c',
        //'aws-font-color': '#232F3E',
        'aws-font-color-white': '#ffffff',
        'aws-paper': '#f1f3f3',
        red: '#dc2626',
        'light-red': '#fee2e2',
        yellow: '#f59e0b',
        'light-yellow': '#fef9c3',
        'dark-gray': '#6b7280',
        gray: '#6b6b6a',
        //         gray: '#9ca3af',     NOME CHAT
        'light-gray': '#e5e7eb',    // contorno 'invia messaggio' e contorno algoritmi

      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
