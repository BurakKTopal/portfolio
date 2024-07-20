import './App.css';
import Home from './pages/home/Home.js';
import "./styles/rootlayout.css"; // Ensure correct path to rootlayout.css
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { themeAtom } from './styles/themeAtom.js';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher.js';
import FadeInSection from './UI/fadeInSection/FadeInSection.js';
import isMobile from './utils/UseMobileCheck.js';


function App() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // For fade in effect
    const isUsingMobile = isMobile();
    document.body.className = `${theme} ${isUsingMobile ? "mobile" : "desktop"}`;
    setIsMobileDevice(isUsingMobile)
  }, [theme]);

  return (
    <>
      <div className={`'app-body' fade-in ${isVisible ? 'visible' : ''}`}>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <Home />
      </div >
    </>


  );
}


export default App;
