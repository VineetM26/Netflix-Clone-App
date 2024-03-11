import React, { useState } from 'react'
import TopNav from '../components/TopNav'

const Netflix = () => {

  const[isScrolled, setIsScrolled] = useState(false)

  window.onscroll =()=>{
    setIsScrolled(window.scrollY === 0 ? false: true)
    return ()=>{window.onscroll = null}
  }
  console.log(isScrolled)
  return (
    <div className='hero'>
      <TopNav isScrolled={isScrolled} />
      <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg' 
      alt='hero image'
      />
      <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg' 
      alt='hero image'
      />
      <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg' 
      alt='hero image'
      />
      <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg' 
      alt='hero image'
      />
    </div>
  )
}

export default Netflix