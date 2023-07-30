import React from 'react'
import {   IoLogoElectron, IoRocketOutline, IoColorPaletteOutline } from "react-icons/io5";
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <IoRocketOutline/>,
    title: ' Elevate Your Tech Game',
    text:
      'Discover a world of endless inspiration with our carefully curated range of innovative devices. From high-performance laptops and tablets to feature-packed smartphones, our collection is designed to ignite your imagination.',
  },
  {
    id: 2,
    icon: <IoColorPaletteOutline/>,
    title: 'Unleash Creativity & Productivity',
    text:
      'Experience seamless performance and unrivaled power that fuels your inspiration. From lightning-fast processors to stunning displays, our devices are engineered to keep up with your imagination and boost your productivity.',
  },
  {
    id: 3,
    icon: <IoLogoElectron/>,
    title: 'Uncompromised Innovation',
    text:
      'We stay at the forefront of technology to bring you the latest innovations. Our handpicked range of devices incorporates state-of-the-art features, ensuring you always have access to the best-in-class technology.',
  },
]


export const products_url = '/.netlify/functions/products'

export const single_product_url = '/.netlify/functions/single-product?id='
