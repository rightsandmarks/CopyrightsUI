/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        limeAccent: '#9FC344',
        darkGrayColor: '#151b2b',
        royalBlue: '#082268',
        primaryBlue: '#0A73B5',
        darkText:'#0C183A',
        normalBlackText:'#444444',
        button1Color:'#D7EEF5',
        button2Color:'#D7E5F5',
        bgSection:'#F6FAFF',
        certiOutBGColor: '#F9F4D8',
        certiInBGColor: '#FFFBE9',
        certiBorderColor: '#B17F2B',
        certiText: '#101010',
        borderClient:'#586FAE'

         // Add your custom color
      },
      fontSize: {
        paragraph: '16px', // Paragraph text
        heading: '20px', // Heading text
        headingBig: '24px', // Heading text
      },
      lineHeight: {
        paragraph: '1.5', // Line height for paragraphs
        heading: '1.6', // Line height for headings
      },
      fontFamily: {
        allura: ['Allura', 'cursive'], // Add fallback font-family
        montserrat: ['Montserrat', 'sans-serif'], // Add fallback font-family
        libre: ["Libre Baskerville", 'serif'],
        schib:["Schibsted Grotesk", 'serif']
      },
      animation: {
        marquee: 'marquee 20s linear infinite', // Name and duration
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

