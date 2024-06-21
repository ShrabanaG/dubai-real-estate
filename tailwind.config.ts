import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        amenitiesHeaderFont: ["Montserrat", "sans-serif"]
      },
      backgroundImage: {
        "header-image": "url('/assets/Header_Background.png')"
      },
      backgroundColor: {
        "sub-header": "rgba(0,0,0,26%)",
        "sub-header-content2": "rgba(0,0,0,30%)",
        "features-bg": "#F4F9FF",
        "sub-header-content2-responsive": "rgba(87, 144, 190, 0.12)"
        

      },
      backgroundSize: {
        'full': '100% 100%',
      },
      colors: {
        primaryColor: "#17ABFF",
        featureColor: "#00357B",
        amenitiesColor:"#004572",
        headerContent3Color: "#98C5E8",
        borderColor: "rgba(0,0,0,30%)",
        btnColor: "#00357B",
        amenitiesContentColor: "#343434",
        amenitiesCardBgColor: "#D9D9D9",
        amenitiesFooterColor: "#686868",
        textColor: "#FCFCFC",
        footerBgColor: "#091D41"
      }
    },
  },
  plugins: [],
};
export default config;
