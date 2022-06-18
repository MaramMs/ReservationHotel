import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Div>
        <div className='footer'>

<div className="footerList">
    <ul className='list'>
        <li className='listItem'>
            Countries
            </li>
            <li className='listItem'>
            Regions
            </li>
            <li className='listItem'>
            Cities
            </li>
            <li className='listItem'>
            Districts
            </li>

            <li className='listItem'>
            Airports
            </li>
            <li className='listItem'>
            Hotesls
            </li>

    </ul>

    <ul className='list'>
        <li className='listItem'>
            Countries
            </li>
            <li className='listItem'>
            Regions
            </li>
            <li className='listItem'>
            Cities
            </li>
            <li className='listItem'>
            Districts
            </li>

            <li className='listItem'>
            Airports
            </li>
            <li className='listItem'>
            Hotesls
            </li>

    </ul>
    <ul className='list'>
        <li className='listItem'>
            Countries
            </li>
            <li className='listItem'>
            Regions
            </li>
            <li className='listItem'>
            Cities
            </li>
            <li className='listItem'>
            Districts
            </li>

            <li className='listItem'>
            Airports
            </li>
            <li className='listItem'>
            Hotesls
            </li>

    </ul>
</div>
<div className='footerText'>
copyright &copy; 2022 dev.Maram
</div>
        </div>

    </Div>
  )
}

const Div = styled.div`
.footer{
    width: 100%;
    width: 1024px;
    font-size: 14px;
    align-items: center;
    margin:50px auto 0px auto;
    
    .footerList{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        .list{
            list-style: none;
            padding: 0px;
            .listItem{
               margin-bottom: 10px;
               color: #003580;
               cursor: pointer;
              }
        }
    
        }
}

`
export default Footer