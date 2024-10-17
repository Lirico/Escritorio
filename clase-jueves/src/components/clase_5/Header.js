import { LanguageContext } from "@/contexts/LanguageContextProvider";
import { ThemeContext } from "@/contexts/ThemeContextProvider";
import { useContext } from "react";

const Header = () => {
  const { handleTheme, toggleTheme, toggleIcon } = useContext(ThemeContext);
  const { handleLanguage, language } = useContext(LanguageContext);

  return (
    <>
      <header className={toggleTheme}>
        <button onClick={handleTheme}>{toggleIcon}</button>
        <button onClick={handleLanguage}>{
          language ? <img src="spain.png" alt="" /> : <img src="uk.png" alt="" />
        }</button>
      </header>

      <style jsx>{`
        header {
          display: flex;
          align-items: center;
        }
        button {
          background-color: transparent;
          border: none;
          font-size: 25px;
          line-height: 0;
        }
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default Header;
