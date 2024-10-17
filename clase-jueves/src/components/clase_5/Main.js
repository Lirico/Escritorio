import { LanguageContext } from "@/contexts/LanguageContextProvider";
import { ThemeContext } from "@/contexts/ThemeContextProvider";
import { useContext } from "react";

const Main = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <main
      className={toggleTheme}
      style={{
        height: "100vh",
      }}
    >
      <section>
        <h2>{toggleLanguage.title}</h2> 
        <h3>{toggleLanguage.subtitle}</h3>
        <p>{toggleLanguage.text}</p>
      </section>
    </main>
  );
};

export default Main;
