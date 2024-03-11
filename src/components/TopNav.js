import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
      
const TopNav = (isScrolled) => {
  
  const navlinks = [
      {name: "Home", link: '/'},
      {name: "TV Show", link: '/tv'},
      {name: "My List", link: '/mylist'},
      {name: "Movies", link: '/movies'}
  ]
  
  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
      
      <div className='leftSide'>
          <div className='logo'>
            <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png'
            alt='logo'
            />
          </div>
          <ul className='links'>
              {
                navlinks.map(({name, link})=>{
                    return(
                      <li key={name}>
                          <Link to={link}>{name}</Link>
                      </li>
                    )
                })
              }
          </ul>
        </div>

        <div className='rightSide'>
              <button>
                <AiOutlineLogout/>
              </button>
        </div>
      </nav>

    </NavContainer>
  )
}

const NavContainer = styled.div`
    .notScroll{
      display: flex;
    }
    .scrolled{
      display: flex;
      background-color: black;
    }
    nav{
      position: sticky;
      top: 0;
      height: 6rem;
      width: 100%;
      justify-content: space-between;
      position: fixed;
      z-index: 2;
      padding: 0.4rem;
      align-items: center;
      transition: 0.3s ease-in-out;
      .leftSide{
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      .logo{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img{
        width: 10rem;
        height: 2rem;
      }
    }
    .links{
      
    }
`

export default TopNav