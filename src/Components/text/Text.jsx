
import React from 'react'

const Text = (props) => {
  const Tag = props.tag;
  console.log(props);
  return (
    <Tag className={` ${props.style.fontSize} ${props.style.fontFamily} ${props.style.fontWeight} ${props.style.textDecoration} ${props.style.fontStyle}`} contentEditable={true} >{props.text}</Tag>
  )
}

export default Text;