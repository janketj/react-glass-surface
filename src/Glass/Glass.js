import React from 'react'

import './Glass.css'

const Glassmorphism = ({
  background = 'rgba(255, 255, 255, 0.2)',
  border = 'none',
  borderRadius = '0px',
  boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)',
  className,
  children,
  style,
  ...props
}) => (
  <div
    {...props}
    style={{
      background,
      border,
      borderRadius,
      boxShadow,
      ...style,
    }}
    className={`gls ${className ?? ''}`}
  >
    {children}
  </div>
)

export default Glassmorphism
