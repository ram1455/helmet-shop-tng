import React from 'react'
import "./style-main.css"
// import dovizioso from "../../images/kyt_dovizioso/TTC-DOVIZIOSO-1.jpeg"

import helmetData from "../../helmetData"

export default function Main() {
  console.log(helmetData)

  const barangs = helmetData.map( item => {
        
        // return ( <div className='item-container'>
        //   <img src={`./images/${item.image_url}`} alt="" />
        //   <div className='item-name'>
        //     <h1>{item.nama}</h1>
        //   </div>
        // </div>)

        return (
          
        <div className='item-container'>
          <div className='image-container'>
            <img src={`./images/${item.image_url}`} alt="" />
            <div className='badge_terjual'><p>TERJUAL</p></div>
          </div>
          <div className='item-name'>
             <h1>HELM PLACEHOLDER</h1>
          </div>
        </div>
        )
  })

  return (
    <main>
        {
          barangs
        }

    </main>
  )
}
