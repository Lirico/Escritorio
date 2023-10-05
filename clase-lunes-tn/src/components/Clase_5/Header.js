import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

const Header = () => {

    const data = useContext(ThemeContext)

    const [toggleTheme, handleTheme] = data;

  return (
    <header className={toggleTheme}>
        <button onClick={handleTheme}>{
            <img src={ 
                toggleTheme === "light"
                    ? "moon.png"
                    : "sun.png"
            } alt="theme-logo"/>
        }</button>

        <style jsx>{`
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


