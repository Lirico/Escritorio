






const Quote = ({quote}) => {

    // Destructurar el objeto de cita
    const {text, author} = quote;

  return (
    <>
        <blockquote>
            <p><i>"{text}"</i></p>
            <h3>- {author}</h3>
        </blockquote>
    </>
  )
}

export default Quote