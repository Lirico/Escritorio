
import { ThemeContext } from '@/context/ThemeContextProvider'
import { useContext } from 'react'

const Footer = () => {

    const data = useContext(ThemeContext)

    const [theme] = data;

  return (
    <div style={{
            height: "100vh"
        }}
        className={theme}
    >Footer</div>
  )
}

export default Footer