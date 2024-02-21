import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
          'brand-25' : '#FCFAFF',
          'brand-50' : '#F9F5FF',
          'brand-100' : '#F4EBFF',
          'brand-200' : '#E9D7FE',
          'brand-300' : '#D6BBFB',
          'brand-400' : '#B692F6',
          'brand-500' : '#9E77ED',
          'brand-600' : '#7F56D9',
          'brand-700' : '#6941C6',
          'brand-800' : '#53389E',
          'brand-900' : '#42307D',
          'primary-50' : '#F5F3F7',
          'primary-100' : '#E9E4ED',
          'primary-200' : '#D6C6E1',
          'primary-300' : '#9A73B5',
          'primary-400' : '#8B5FBF',
          'primary-500' : '#61398F',
          'blue-100' : "#757DE8",
          'blue-200' : "#2196F3",
          'blue-300' : "#3F51B5",
          'blue-400' : "#003F8F",
          'gray-100' : '#878787',
          'gray-200' : '#4A4A4A',
          'black' : '#292929',
          'white' : '#FFFFFF',
          'red' : '#D92D20',
      },
      boxShadow: {
          card: "0px 20px 50px rgba(0, 0, 0, 0.06)",
          course: "0px 0px 50px rgba(0, 0, 0, 0.06)",
          thin: "0px 8px 24px 0px rgba(36, 42, 56, 0.20)",
          'thin-more': "0px 6px 10px 0px rgba(36, 42, 56, 0.20)",
      },
      animation : {
        'animate-pulse-1' : 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        // animate-pulse	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    },
    fontFamily: {
        Rubik : ["Rubik", "sans-serif"], 
        Pridi : ["Pridi", "serif"], 
        Signika: ["Signika", "sans-serif"]
    }
  },
  plugins: [
    ({ addUtilities } : {addUtilities : any}) => {
        addUtilities({
          '.light14': {},
          '.light16': {},
          '.light18': {},
          '.light20': {},
          '.light24': {},
          '.light30': {},
          '.light36': {},
          '.regular14': {},
          '.regular16': {},
          '.regular18': {},
          '.regular20': {},
          '.regular24': {},
          '.regular30': {},
          '.regular36': {},
          '.medium14': {},
          '.medium16': {},
          '.medium18': {},
          '.medium20': {},
          '.medium24': {},
          '.medium30': {},
          '.medium36': {},
          '.bold14': {},
          '.bold16': {},
          '.bold18': {},
          '.bold20': {},
          '.bold24': {},
          '.bold30': {},
          '.bold36': {},
          '.input' :{},
        });
      }
  ],
}
export default config
