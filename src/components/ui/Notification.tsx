import React from 'react'

interface NotificationProps {
  children: React.ReactElement
}

export default function Notificaiton ({ children }: NotificationProps): JSX.Element {
  return (
    <div className='notification'>
      {children}
    </div>
  )
}
