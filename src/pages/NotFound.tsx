import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound (): JSX.Element {
  return (
        <div className="not-found">
            <div className='not-found-content'>
                <span>404</span>
                <h2>What are you doing here?</h2>
                <p>The page you are looking for does not exist!</p>
                <Link to="/">Go back</Link>
            </div>
        </div>
  )
}
