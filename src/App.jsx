import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import Navbar from "./components/Navbar/Navbar";
import ThemeBtn from "./components/Navbar/ThemeBtn";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import 'aos/dist/aos.css'

function App() {
  useEffect(()=> {
    AOS.init({
      offset:100,
      duration:500,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh();
  },[])

const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </ThemeProvider>
     
  );
}

export default App;
