import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";

const Footer = () => {

    const data = useContext(ThemeContext)

    const [theme] = data;

  return (
    <>
      <footer className={theme}>
        <h2>Footer</h2>
      </footer>
      <style jsx>{`
        footer {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Footer;
