import styled from 'styled-components'
import React from 'react'
import Button from './Button'

const Card = (props) => {
  return (
    <CardContainer>
      <Image src={props.data.img} alt="" />
      <figcaption>
        <CardTitle>{props.data.title}</CardTitle>
      </figcaption>
      <CardText>{props.data.text}</CardText>
      <Button bgColor={props.data.btnBgColor} />
    </CardContainer>
  )
}

export default Card


const CardContainer = styled.figure`
  width: 200px;
  height: 300px;
  border: 2px solid black;
  text-align: center;
`
const Image = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`
const CardTitle = styled.h3`
  line-height: 0.5;
`
const CardText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`


