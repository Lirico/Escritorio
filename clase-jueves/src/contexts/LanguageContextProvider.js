import { createContext, useState } from "react"

export const LanguageContext = createContext();


const LanguageContextProvider = ({children}) => {

     const [language, setLanguage] = useState(false)

     const handleLanguage = () => setLanguage(!language)

     const spanish = {
        title: 'Titulo de sección',
        subtitle: 'Subtítulo de sección',
        text: 'En el futuro lucharán, nuestras estrellas brillaran, un sueño vendrán para conquistar, dentro de la oscuridad un heroe resusitará, como el fenix logrará surgir...'
     } 
     const english = {
        title: 'Section title',
        subtitle: 'Section subtitle',
        text: 'In the future they will fight, our stars will shine, a dream will come to conquer, within the darkness a hero will rise, like the fenix will manage to emerge...'
     } 

     const toggleLanguage = language ? english : spanish

     const data = {
        handleLanguage,
        toggleLanguage,
        language
     }

  return (
    <LanguageContext.Provider value={data}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider