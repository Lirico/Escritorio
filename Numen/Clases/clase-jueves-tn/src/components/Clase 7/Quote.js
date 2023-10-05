




const Quote = ({quote}) => {

    const {text, author} = quote;

  return (
    <>
        <blockquote cite='https://es.wikipedia.org/wiki/Breaking_Bad'>
            <i>"{text}"</i>
        </blockquote>
        <h3>- {author}</h3>
    </>
  )
}

export default Quote