import React from 'react'
import Img from 'gatsby-image'

export default ( { data }) => (
  <div>
    {/* <Img
    //   className={styles.heroImage}
        fluid={data.heroImage.fluid}
    /> */}  
    <h4> {data.heroCardTitle} </h4>    
    <p> {data.heroCardDescription}</p>
    <a href={data.heroCardLinkUrl}> Learn more &rarr; </a>
    <img src={data.heroCardImage.file.url}></img>    

    {/* <p> {data.node} </p> */}
  </div>
)
