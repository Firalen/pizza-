import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
const navigate = useNavigate()


  return (
    <>
    <div className='home'>
      <h1>PEDRO'S PIZZARIA</h1>
      <h2>ORDER ANY PIZZA TO FIT ANY TASTE</h2>
      <button onClick={()=>navigate('menu')}>ORDER</button>
    </div>
     <Footer />
    </>
  )
}

export default Home
