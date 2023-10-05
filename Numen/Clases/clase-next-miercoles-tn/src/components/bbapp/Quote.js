



const Quote = ({quote}) => {

    const {text, author} = quote;

  return (
    <>
        <blockquote>
            <p><i>"{text}"</i></p>
            <span>- <b>{author}</b></span>
        </blockquote>
    </>
  )
}

export default Quote