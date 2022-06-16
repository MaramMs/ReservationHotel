import React from 'react'
import {Navbar,Header,Features,PropertyList,FeaturedList, Mail, Footer } from '../components'
import styled from 'styled-components'


const Home = () => {
  return (
    <Div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Features />
        <h1 className='homeTitle'> Browse by property type  </h1>
        <PropertyList />
        <h2 className='homeTitle'> Homes guests love </h2>
          <FeaturedList />
          <Mail />
          <Footer />
      </div>
    </Div>
  )
}

const Div = styled.div`
  .homeContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
    .homeTitle{
      width: 1024px;
      font-size: 20px;
      font-weight: bold;
    }
  }
`
export default Home