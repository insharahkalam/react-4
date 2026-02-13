import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'

const Home = () => {
  const [search, setSearch] = useState("")
  return (
    <>
  
        <Navbar search={search} setSearch={setSearch} />
        <Cards search={search} />
  

    </>
  )
}

export default Home