





const Quote = ({quote}) => {

    const {text, author} = quote;

  return (
    <div>
        <blockquote>"<i>{text}</i>"</blockquote>
        <cite><b>- {author}</b></cite>
    </div>
  )
}

export default Quote