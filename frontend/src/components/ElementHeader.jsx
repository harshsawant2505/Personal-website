import React from 'react'


function ElementHeader({classname,href,style,content,icon}) {
  return (
    <a className={classname} style={style}  href={href}>{icon}<li>{content}</li>  </a>
  )
}

export default ElementHeader

