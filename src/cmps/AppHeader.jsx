import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../store/actions/appSettingsActions";

import { GiCommercialAirplane } from "react-icons/gi";
import { IconContext } from "react-icons/lib";

export const AppHeader = () => {
  const { isMenuOpen } = useSelector((state) => state.appSettingsModule);
  const dispatch = useDispatch();

  const [isResized, setIsResized] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsResized(true);
    } else {
      setIsResized(false);
    }
  };

  const setMenu = () => {
    if (isResized) {
      dispatch(toggleMenu());
    }
  };

  return (
    <header className="content">
      <div
        className={`appHeader-screen ${isMenuOpen ? "show-screen" : ""}`}
        onClick={setMenu}
      ></div>
      <nav className="appHeader-nav-color">
        <div className="appHeader-nav flex justify-between container">
          <div className="flex auto-center">
            <Link to="/">
              <IconContext.Provider value={{ size: "5em" }}>
                <div className="logo">
                  <GiCommercialAirplane />
                </div>
              </IconContext.Provider>
            </Link>
          </div>

          <ul
            className={`appHeader-nav-links flex ${
              isMenuOpen ? "open-nav-links" : ""
            }`}
          >
            <li onClick={setMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={setMenu}>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className=" btn-holder flex auto-center">
            <button className="btn1" onClick={setMenu}>☰</button>
          </div>
        </div>
      </nav>
    </header>
  );
};
