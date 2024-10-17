import { ThemeContext } from "@/contexts/ThemeContextProvider";
import { useContext } from "react";


const Footer = () => {
  const {toggleTheme} = useContext(ThemeContext);

  return (
    <div className={toggleTheme} style={{
      height: '100vh'
    }}>Footer</div>
  )
}

export default Footer