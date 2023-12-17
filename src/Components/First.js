import React from 'react'
import macbook from "../images/home/macbook-pro.jpg"
function First() {
  return (
    <div>
      <section> 
        <div className="first-section">
        
            <p className="model">16-inch model</p>
            <h1 className="product">MacBook Pro</h1>
            <h2 className="description">The best for the brightest.</h2>
            <div className="links-wrapper">
                <ul>
                    <li>
                        <a href="#">Learn more</a></li>
                    <li><a href="#"> Buy</a></li>
                </ul>
            </div>
            <img src={macbook}/>
        </div>
        
        
    </section>
    </div>
  )
}

export default First
