import React from 'react'

interface ButtonProps {
  children: React.ReactElement
  className: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export default function Button ({ children, className, onClick }: ButtonProps): JSX.Element {
  return (
        <button className={`${className}`} onClick={onClick}>
            {children}
        </button>
  )
}
