/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem',
        }
      },
      backgroundImage: {
          'sm' : 'url("../../assets/Images/headerBgMobile.webp")',
          'xl' : 'url("../../assets/Images/headerBgDesktop.webp")',
          'conic-gradient' : 'conic-gradient(from 90deg , var(--tw-gradient-stops))',
          'beforeArticle' : 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 90%)',
          'afterArticle' : 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          'instagramPage' : 'url("../../assets/Images/section-pattern/section-pattern.png") , linear-gradient(to right, #502ED6, #CD2F6A, #FFE354)',
          'UserCTAbg' : 'url("../../assets/Images/cta-bg.jpg")',
          'registerFormBg' : 'url("../../assets/Images/registerFormBg.png")',
      },
      colors: {
        primary: '#ffcc00',
        gray : {
            main: '#1C1C28',
            500: '#94A3B8',
            600: '#777C94',
          700: '#32334D',
          800:'#28293D'
        },
        mainSlate: '#4A4B6D'
      },
      boxShadow: {
        normal: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
        light: '0 1px 60px rgba(0,0,0, 0.05)',
        6: "0px 0px 6px 0px rgba(0, 0, 0, 0.30)",
        ring: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        green: '0 40px 40px 0 rgba(0, 128, 0, 0.4)',
        orange: '0 40px 40px 0 rgba(255, 138, 115, 0.4)',
        yellow: '0 40px 40px 0 rgba(224, 149, 32, 0.4)',
        countBox: '0 10px 55px 5px rgba(137, 173, 255, 0.35)',
        round: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        breadcrumb: '0 0 #0000 , 0 0 #0000',
      },
      borderRadius: {
        "4xl": "2rem",
      },
      height : {
         '17' : '4.25rem'
      },
      fontFamily: {
        Dana: "Dana",
        DanaMd: "Dana Medium",
        DanaBold: "Dana DemiBold",
        Morabba: "Morabba Light",
        MorabbaMd: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      lineHeight: {
        'leading-11' : '3rem',
      },
      spacing: {
        "4.5" : "1.125rem",
        "25" : "6.25rem",
        "30": "7.5rem",
        "50" : "12.5rem",
      },
      variants: {
        scrollbar: ["dark"],
      },
      width: {
        "1p": "1%",
        "2p": "2%",
        "3p": "3%",
        "4p": "4%",
        "5p": "5%",
        "6p": "6%",
        "7p": "7%",
        "8p": "8%",
        "9p": "9%",
        "10p": "10%",
        "11p": "11%",
        "12p": "12%",
        "13p": "13%",
        "14p": "14%",
        "15p": "15%",
        "16p": "16%",
        "17p": "17%",
        "18p": "18%",
        "19p": "19%",
        "20p": "20%",
        "21p": "21%",
        "22p": "22%",
        "23p": "23%",
        "24p": "24%",
        "25p": "25%",
        "26p": "26%",
        "27p": "27%",
        "28p": "28%",
        "29p": "29%",
        "30p": "30%",
        "31p": "31%",
        "32p": "32%",
        "33p": "33%",
        "34p": "34%",
        "35p": "35%",
        "36p": "36%",
        "37p": "37%",
        "38p": "38%",
        "39p": "39%",
        "40p": "40%",
        "41p": "41%",
        "42p": "42%",
        "43p": "43%",
        "44p": "44%",
        "45p": "45%",
        "46p": "46%",
        "47p": "47%",
        "48p": "48%",
        "49p": "49%",
        "50p": "50%",
        "51p": "51%",
        "52p": "52%",
        "53p": "53%",
        "54p": "54%",
        "55p": "55%",
        "56p": "56%",
        "57p": "57%",
        "58p": "58%",
        "59p": "59%",
        "60p": "60%",
        "61p": "61%",
        "62p": "62%",
        "63p": "63%",
        "64p": "64%",
        "65p": "65%",
        "66p": "66%",
        "67p": "67%",
        "68p": "68%",
        "69p": "69%",
        "70p": "70%",
        "71p": "71%",
        "72p": "72%",
        "73p": "73%",
        "74p": "74%",
        "75p": "75%",
        "76p": "76%",
        "77p": "77%",
        "78p": "78%",
        "79p": "79%",
        "80p": "80%",
        "81p": "81%",
        "82p": "82%",
        "83p": "83%",
        "84p": "84%",
        "85p": "85%",
        "86p": "86%",
        "87p": "87%",
        "88p": "88%",
        "89p": "89%",
        "90p": "90%",
        "91p": "91%",
        "92p": "92%",
        "93p": "93%",
        "94p": "94%",
        "95p": "95%",
        "96p": "96%",
        "97p": "97%",
        "98p": "98%",
        "99p": "99%",
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("tailwind-scrollbar"),
  ],
};
