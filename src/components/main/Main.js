import React from 'react'
import "./style-main.css"
import dovizioso from "../../images/TTC-DOVIZIOSO-1.jpeg"

export default function Main() {

  const beraparray = [1,2,3,4,5,6,7]

  const barangs = beraparray.map( item => {
        
        return ( <div className='item-container'>
          <img src={dovizioso} alt="" />
          <div className='item-name'>
            <h1>Dovizioso</h1>
          </div>
        </div>)
  })

  return (
    <main>
        {
          barangs
        }
    </main>
  )
}
