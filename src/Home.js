import React from 'react'
import Nav from './Nav'
import Row from './row'
import Classes from './Classes'
import './Home.css'

function Home() {
  console.log(process.env)
    return (
        <div className="">
          <Nav/>
          <Row/>
          <Classes/>
        </div>
    )
}

export default Home