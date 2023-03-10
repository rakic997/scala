/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Button from '../components/ui/Button'
import Product from '../components/Product'
import Loader from '../components/ui/Loader'

import { useFetch } from '../hooks/useFetch'
import type IProduct from '../types/types'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'

import headerImage from '../assets/test.jpg'
import AddImage from '../assets/v.webp'

export default function Home (): JSX.Element {
  const { categories, setCategory } = useProducts()

  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products')

  const featureSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const featuredProductsSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
        <div className="home-page">
            <section className='banner'>
                <div className='container'>
                    <div className='banner-text'>
                        <div className='banner-text-content'>
                            <h2>See everything <br /> with Scala</h2>
                            <p>Buying items should leave you happy and good-looking, with money in your pocket. Cloth, electronic, and other stuff.</p>
                            <Button className='btn btn-dark btn-size-lg'>
                                <span>Show now</span>
                            </Button>
                        </div>

                    </div>
                    <div className='banner-image'>
                        <img src={headerImage} alt="product" />
                    </div>
                </div>

                <div className='features'>
                    <Slider {...featureSettings}>
                        <div className='feature'>
                            <div className='feature-inner'>
                                <div className='feature-icon icon-1'>
                                    <svg enableBackground="new 0 0 48 48" id="Layer_1" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd" d="M44.602,23.775L21.806,46.571c-0.032,0.048-0.053,0.102-0.095,0.144  c-0.197,0.196-0.457,0.287-0.715,0.281c-0.258,0.006-0.518-0.085-0.715-0.281c-0.042-0.042-0.062-0.096-0.095-0.144L3.425,29.81  c-0.048-0.032-0.101-0.053-0.144-0.095C3.084,29.518,2.995,29.258,3,29c-0.006-0.258,0.084-0.518,0.281-0.715  c0.043-0.042,0.096-0.062,0.144-0.095L26.221,5.395C26.404,5.16,26.676,5,26.996,5h0.021c0.002,0,0.004,0,0.006,0h4.029  c0.133-1.502,0.746-2.82,1.67-3.683l0.016,0.018C32.934,1.128,33.201,1,33.496,1c0.592,0,1.072,0.512,1.072,1.143  c0,0.375-0.18,0.691-0.441,0.899C33.648,3.484,33.307,4.181,33.193,5h4.775c0.002,0,0.004,0,0.008,0h0.02  c0.32,0,0.594,0.16,0.775,0.395l5.83,5.83c0.234,0.183,0.395,0.456,0.395,0.776v0.021c0,0.002,0,0.004,0,0.006v10.945  c0,0.002,0,0.004,0,0.007V23C44.996,23.32,44.836,23.593,44.602,23.775z M34.254,16.666C34.061,16.872,33.793,17,33.496,17  c-0.592,0-1.07-0.512-1.07-1.143c0-0.375,0.18-0.691,0.441-0.9c0.248-0.229,0.451-0.537,0.617-0.883  c-0.855,0.228-1.488,1-1.488,1.925c0,1.104,0.896,2,2,2c1.105,0,2-0.896,2-2c0-0.473-0.17-0.901-0.445-1.244  C34.936,16.302,34.254,16.666,34.254,16.666z M42.996,12.381L37.615,7h-4.213c0.174,0.444,0.424,0.822,0.725,1.1l0,0  c0.041,0.033,0.092,0.053,0.127,0.092l0.018-0.018c1.041,0.973,1.725,2.508,1.725,4.254c0,0.042-0.01,0.079-0.012,0.12  c1.197,0.691,2.012,1.97,2.012,3.452c0,2.209-1.791,4-4,4s-4-1.791-4-4c0-2.147,1.695-3.885,3.82-3.982  c-0.09-0.888-0.441-1.648-0.949-2.118c-0.041-0.033-0.092-0.053-0.129-0.092l-0.016,0.018C31.979,9.131,31.43,8.141,31.17,7h-3.793  l-22,22l15.619,15.619l22-22V12.381z M14.282,27.285c0.382-0.381,1-0.381,1.381,0l7.049,7.049c0.381,0.381,0.381,0.999,0,1.381  c-0.381,0.381-1,0.381-1.381,0l-7.049-7.049C13.901,28.285,13.901,27.667,14.282,27.285z M18.282,23.285  c0.382-0.381,1-0.381,1.381,0l7.048,7.049c0.381,0.381,0.381,0.999,0,1.381c-0.381,0.381-1,0.381-1.381,0l-7.048-7.049  C17.901,24.285,17.901,23.667,18.282,23.285z" fill-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className='feature-text'>
                                    <h6>Best offers</h6>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>
                        <div className='feature'>
                            <div className='feature-inner'>
                                <div className='feature-icon icon-2'>
                                    <svg enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512">
                                        <g id="Layer_1" /><g id="Layer_2">
                                            <g>
                                                <path d="M401.8,206.5c-1.4-2-3.7-3.2-6.1-3.2h-46.5v-19.8c0-4.1-3.4-7.5-7.5-7.5H173.2c-4.1,0-7.5,3.4-7.5,7.5v121.2    c0,4.1,3.4,7.5,7.5,7.5h21.2c3.9,13.6,16.5,23.7,31.3,23.7s27.4-10,31.3-23.7h83.1c3.9,13.6,16.5,23.7,31.3,23.7    s27.4-10,31.3-23.7h15.5c4.1,0,7.5-3.4,7.5-7.5V243c0-1.6-0.5-3.1-1.4-4.3L401.8,206.5z M410.8,245.2h-33.6v-26.8h14.7    L410.8,245.2z M180.7,191.1h153.5v106.2h-76.5c-2.9-15.1-16.1-26.5-32-26.5s-29.2,11.4-32,26.5h-13V191.1z M225.7,320.9    c-9.7,0-17.6-7.9-17.6-17.6s7.9-17.6,17.6-17.6s17.6,7.9,17.6,17.6S235.4,320.9,225.7,320.9z M371.5,320.9    c-9.7,0-17.6-7.9-17.6-17.6s7.9-17.6,17.6-17.6s17.6,7.9,17.6,17.6S381.2,320.9,371.5,320.9z M403.5,297.3    c-2.9-15.1-16.1-26.5-32-26.5c-8.6,0-16.5,3.4-22.3,8.9v-61.3h12.9v34.3c0,4.1,3.4,7.5,7.5,7.5h41.3v37.1H403.5z" />
                                                <path d="M93.6,191.1h53.5c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5H93.6c-4.1,0-7.5,3.4-7.5,7.5S89.5,191.1,93.6,191.1z" />
                                                <path d="M147.1,203.4h-41.2c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h41.2c4.1,0,7.5-3.4,7.5-7.5S151.3,203.4,147.1,203.4z" />
                                                <path d="M147.1,230.7h-26c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h26c4.1,0,7.5-3.4,7.5-7.5S151.3,230.7,147.1,230.7z" />
                                                <path d="M147.1,258h-9c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h9c4.1,0,7.5-3.4,7.5-7.5S151.3,258,147.1,258z" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className='feature-text'>
                                    <h6>Free delivery</h6>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>
                        <div className='feature'>
                            <div className='feature-inner'>
                                <div className='feature-icon icon-3'>
                                    <svg enableBackground="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50">
                                        <rect fill="none" height="50" width="50" />
                                        <ellipse cx="35" cy="6" fill="none" rx="14" ry="5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <path d="  M21,7c0,0.912,0,5.088,0,6c0,2.761,6.266,5,14,5s14-2.239,14-5c0-0.912,0-5.088,0-6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <path d="  M28.55,24.439C30.48,24.797,32.674,25,35,25c7.734,0,14-2.239,14-5c0-0.912,0-5.088,0-6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <path d="  M21,14c0,0.912,0,4.27,0,4.27" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <path d="  M29.025,31.523C30.837,31.829,32.862,32,35,32c7.734,0,14-2.238,14-5c0-0.912,0-5.088,0-6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <path d="  M28.948,38.51C30.779,38.824,32.832,39,35,39c7.734,0,14-2.238,14-5c0-0.912,0-5.088,0-6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <ellipse cx="15" cy="23" fill="none" rx="14" ry="5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <path d="  M1,24c0,0.912,0,5.088,0,6c0,2.762,6.266,5,14,5s14-2.238,14-5c0-0.912,0-5.088,0-6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <path d="  M1,31c0,0.912,0,5.088,0,6c0,2.762,6.266,5,14,5s14-2.238,14-5c0-0.912,0-5.088,0-6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <path d="  M1,38c0,0.912,0,5.088,0,6c0,2.762,6.266,5,14,5s14-2.238,14-5c0-0.912,0-5.088,0-6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className='feature-text'>
                                    <h6>Easy returns</h6>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>
                        <div className='feature'>
                            <div className='feature-inner'>
                                <div className='feature-icon icon-4'>
                                    <svg enable-background="new 0 0 48 48" id="Layer_1" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd" d="M43,40H5c-2.209,0-4-1.791-4-4V12c0-2.209,1.791-4,4-4h38c2.209,0,4,1.791,4,4v24  C47,38.209,45.209,40,43,40z M3,21h42v-4H3V21z M45,12c0-1.104-0.896-2-2-2H5c-1.104,0-2,0.896-2,2v3h42V12z M45,23H3v13  c0,1.104,0.896,2,2,2h38c1.104,0,2-0.896,2-2V23z M26,29h-4c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h4c0.553,0,1,0.448,1,1  C27,28.553,26.553,29,26,29z M17,29H8c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h9c0.553,0,1,0.448,1,1C18,28.553,17.553,29,17,29z   M8,32h6c0.553,0,1,0.448,1,1c0,0.553-0.447,1-1,1H8c-0.553,0-1-0.447-1-1C7,32.448,7.447,32,8,32z" fill-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className='feature-text'>
                                    <h6>Payment</h6>
                                    <p>Pay with multiple cards</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </section>

            <section className="featured">
                {(Boolean((error ?? false))) && <h1>Error</h1>}
                {loading && <Loader />}
                {((Boolean(categories)) && (Boolean(products))) &&
                    <div className='container'>
                        {categories.map((category: string, idx: number) => (
                            <div className='featured-category' key={idx}>
                                <div className="featured-category-header">
                                    <h2>{capitalizeFirstLetter(category)}</h2>
                                    <Link to={`products/${category}`} onClick={() => { setCategory(category) }}>View all</Link>
                                </div>

                                <section className='featured-category-body'>
                                    <Slider {...featuredProductsSettings}>
                                        {products
                                          .filter((product: IProduct) => product.category === category)
                                          .map((product: IProduct) => (
                                                <div className='product-container' key={product.id}>
                                                    <Link to={`/product/${product.id}`}>
                                                        <Product
                                                            key={product.id}
                                                            product={product}
                                                        />
                                                    </Link>
                                                </div>
                                          ))
                                        }
                                    </Slider>

                                </section>
                            </div>
                        ))}
                    </div>}
            </section>

            <section className='advr'>
                <img src={AddImage} alt="banner" />

                <div className='container'>
                    <div className='advr-content'>
                        <h6>All products sale up off to 40%</h6>
                        <h3>Garniture on sale</h3>
                        <div className='subscribe'>
                            <input type='email' placeholder='Just for preview purpose' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}
