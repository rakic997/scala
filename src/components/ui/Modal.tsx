import React from 'react'

interface ModalProps {
  children: React.ReactNode
  onClick: (value: any) => void
  value: boolean
  isOpen: boolean
}

export default function Modal ({ children, onClick, value, isOpen }: ModalProps): JSX.Element {
  return (
        <div className={isOpen ? 'overlay show ' : 'overlay'} onClick={() => { onClick(value) }}>
            <div className='modal' onClick={(e) => { e.stopPropagation() }}>
                {children}
            </div>
        </div>
  )
}
