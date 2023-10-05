import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";

const Header = () => {

    const data = useContext(ThemeContext)

    const [theme, handleTheme, toggleTheme] = data;

  return (
    <header className={theme}>
        <button onClick={handleTheme}>
            <img src={toggleTheme ? "moon.png" : "sun.png"} alt="theme-icon" />
        </button>

        <style jsx>{`
          header {
            padding: 20px 20px;
          }
          button {
            background-color: transparent;
            border: none;
          }
          img {
            width: 30px;
          }
        `}</style>
    </header>
  );
};

export default Header;
