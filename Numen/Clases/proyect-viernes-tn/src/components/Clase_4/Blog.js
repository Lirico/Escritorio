import { useState, useEffect } from "react";




const Blog = () => {

    const [recurso, setRecurso] = useState('posteos');

    useEffect(() => {
        console.log("Efecto secundario")
    }, [])   


    return (
        <>
           
        </>
    )
};
export default Blog;