import React, { useState, useRef } from 'react'
import useOutsideClick from '../../hooks/useOutsideClick'

export default function Login (): JSX.Element {
  const [user, setUser] = useState({
    username: 'mor_2314',
    password: '83r5^_'
  })
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [token, setToken] = useState()
  const [isShown, setIsShown] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  async function login (): Promise<void> {
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const data = await response.json()
    localStorage.setItem('token', data.token)
    setToken(data.token)
  }

  function handleSubmit (e: { preventDefault: () => void }): void {
    e.preventDefault()

    void login()
  }

  function handleChange (e: { target: { name: string, value: any } }): void {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function handleLoginToggle (): void {
    setIsShown(prevIsShown => !prevIsShown)
  }

  useOutsideClick(ref, () => {
    setIsShown(false)
  })

  const isLogged = localStorage.getItem('token')

  return (
        <div className='login' ref={ref}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="user-icon nav-icon" onClick={handleLoginToggle}>
                <title />
                <g id="about">
                    <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
                    <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
                </g>
            </svg>

            <div className={isShown ? 'login-content open' : 'login-content'}>
                {(isLogged != null)
                  ? <h6>Welcome to the your Account!</h6>
                  : <form onSubmit={handleSubmit} className='login-form'>
                        <div className='form-group'>
                            <label>Username</label>
                            <input type='text' name='username' value={user.username} onChange={handleChange} />
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' name='password' value={user.password} onChange={handleChange} />
                        </div>
                        <button type='submit'>Login</button>
                    </form>}

            </div>
        </div>
  )
}
