import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import MenuDesk from "./components/menu/desktop/menudesk";
import Footer from "./components/footer/desktop/footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./route";
import { UserProvider } from "./context/UserContext";
import MenuMobile from "./components/menu/mobile/menumobile";
import Message from "./components/message/message";
import { CatProvider } from "./context/CatContext";

function App() {
  const [isMobile, setIsMobile] = useState(true);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    function handleResize() {
      if (window.innerHeight < window.innerWidth) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const addCats = (newCat) => {
    setCat((prevCats) => [...prevCats, newCat]);
  };

  return (
    <>
      <div className="app-container">
        <Router>
          <UserProvider>
            <CatProvider>
              {isMobile ? <MenuMobile /> : <MenuDesk />}
              <Message />
              <div className="app-content">
                <AppRoute addCats={addCats} cat={cat} />
              </div>
            </CatProvider>
            <Footer />
          </UserProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
