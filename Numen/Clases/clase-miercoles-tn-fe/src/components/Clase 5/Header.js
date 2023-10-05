import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

const Header = () => {
  const [theme, handleTheme, toggleTheme] = useContext(ThemeContext);

  return (
    <>
      <header className={theme}>
        <button onClick={handleTheme}>
            <img src={toggleTheme ? "moon.png" : "sun.png"} alt="theme-icon" />
        </button>
      </header>

      <style jsx>{`
            button {
                background: transparent;
                border: none;
            }
            img {
                width: 25px;
            }
      `}</style>
    </>
  );
};

export default Header;
