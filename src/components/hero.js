import React from 'react'
import Img from 'gatsby-image'

export default ( { data }) => (
  <div>
    {/* <Img
    //   className={styles.heroImage}
        fluid={data.heroImage.fluid}
    /> */}  
    <h5> {data.subtitleTop} </h5>    
    <h1> {data.title}</h1>
    <p> {data.subtitleBottom} </p>
  </div>
)
