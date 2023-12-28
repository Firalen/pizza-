import React from 'react'
import PizzaLeft from '../img/pepperoni.jpg'
const cilck= () =>{
      <h3>successful .....</h3>
}

const Contact = () => {
  return (
    
    
    
      <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form>
          <label>first name</label>
          <input type='text' placeholder='enter firstname' />
          <label>email</label>
          <input type='text' placeholder='enter email' />
          <label>message</label>
          <input type='text' placeholder='enter message' />
          <button onClick={cilck}>submit</button>
        </form>
    </div>
    </div>
  )
}

export default Contact;
