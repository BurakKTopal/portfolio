import './App.css';
import Home from './pages/home/Home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/footer/Footer.js';
import "./styles/rootlayout.css"; // Ensure correct path to rootlayout.css
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { themeAtom } from './styles/themeAtom.js';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher.js';
import FadeInSection from './UI/fadeInSection/FadeInSection.js';


function App() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className='app-body'>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />

        <FadeInSection>
          <Router>
            <Routes>

              <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
          </Router>
        </FadeInSection>
      </div>
    </>


  );
}

//PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$

export default App;
