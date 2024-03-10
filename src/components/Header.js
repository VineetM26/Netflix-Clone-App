import React from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {
  console.log(props.login)
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <div className='logo'>
          <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png'z
          alt='no internet connection'
          />
      </div> 
      <button onClick={() => navigate(props.login ? '/login' : '/signup')}>
      {props.login ? 'Log In ' : 'Sign In'}
      </button>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-top: 0.5rem;
    .logo {
      /* margin-top: 0.5rem; */
      img {
        height: 3rem;
        cursor: pointer;  
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: red;
      border: none;
      cursor: pointer;
      color: white; 
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
`

export default Header   