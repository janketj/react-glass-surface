import React from 'react'

import './Glass.css'

const Glassmorphism = ({
  background = null,
  border = null,
  borderRadius = null,
  boxShadow = null,
  className,
  children,
  style = {},
  ...props
}) => {
  const inlineStyle = {
    ...(!!background && { background }),
    ...(!!border && { border }),
    ...(!!borderRadius && { borderRadius }),
    ...(!!boxShadow && { boxShadow }),
  }
  return (
    <div
      {...props}
      style={{
        ...style,
        ...inlineStyle,
      }}
      className={`gls ${className ?? ''}`}
    >
      {children}
    </div>
  )
}

export default Glassmorphism
