import React from 'react'

export default function Footer (): JSX.Element {
  return (
        <footer className="footer">
            <div className="widget-info widget">
                <h6>Support</h6>

                <div className="widget-info-content">
                    <p>
                        685 Market Street, <br />
                        Las Vegas, LA 95820, <br />
                        United States.
                    </p>
                </div>
            </div>
            <div className="widget-links widget">
                <h6>Account</h6>

                <ul className="links">
                    <li>
                        <a>My Account</a>
                    </li>
                    <li>
                        <a>Login / Register</a>
                    </li>
                    <li>
                        <a>Cart</a>
                    </li>
                    <li>
                        <a>Wishilist</a>
                    </li>
                </ul>
            </div>
            <div className="widget-links widget">
                <h6>Quick Link</h6>

                <ul className="links">
                    <li>
                        <a>Privacy Policy</a>
                    </li>
                    <li>
                        <a>Terms Of Use</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div className="widget-links widget">
                <h6>Download App</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus quam, velit eius, voluptas deserunt nulla molestias,
                    ab beatae quo odio sapiente animi iste.</p>
            </div>
        </footer>
  )
}
