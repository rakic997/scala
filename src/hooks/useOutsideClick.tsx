import { type RefObject, useEffect } from 'react'

const useOutsideClick = (ref: RefObject<HTMLInputElement>, callback: () => void): void => {
  const handleClick = (e: { target: any }): void => {
    if ((ref.current != null) && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default useOutsideClick
