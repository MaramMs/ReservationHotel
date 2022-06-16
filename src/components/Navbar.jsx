import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Div >
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo'>MBooking </span>
        <div className='navItems'>
          <button className='navButton'>Register</button>
          <button className='navButton'>Login</button>
        </div>

      </div>
      
    </div>

    </Div>

  )
}

const Div = styled.div`
  .navbar{
    background-color: #003580;
    height: 50px;
    display: flex;
    justify-content: center;

    .navContainer{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1024px;
      color: white;
      padding:20px 0px;

      .logo{
        font-size: 1.5rem;
      }
    }
     .navButton{
      border: none;
      padding: 5px 10px;
      margin-left: 20px;
      transition:all 0.5s ease-in-out;
      color:#003580;
      cursor: pointer;
      &:hover{
        background-color: #003580;
        color: white;
      }
     }

  }


`

export default Navbar
