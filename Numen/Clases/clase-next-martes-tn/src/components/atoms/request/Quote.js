




const Quote = ({quote}) => {

    const {text, author} = quote;

  return (
    <blockquote style={{
      width: "95%",
      textAlign: "center"
    }}>
        <p>{text}</p>
        <span>- {author}</span>
    </blockquote>
  )
}

export default Quote;