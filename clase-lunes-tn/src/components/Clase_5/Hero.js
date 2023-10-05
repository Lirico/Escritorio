import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext } from "react";

const Hero = () => {
  const data = useContext(ThemeContext);

  const [toggleTheme] = data;

  return (
    <div
      style={{
        height: "100vh",
      }}
      className={toggleTheme}
    >
      Home
    </div>
  );
};

export default Hero;
