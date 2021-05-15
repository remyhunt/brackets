import React from 'react';
// import Img from 'gatsby-image'
import Button from 'react-bootstrap/Button';

export default ( { data }) => (
  <div>
    {/* <Img
    //   className={styles.heroImage}
        fluid={data.heroImage.fluid}
    /> */}  
    <h5> {data.subtitleTop} </h5>    
    <h1> {data.title}</h1>
    <p> {data.subtitleBottom} </p>
    <Button href="#">Get Started &gt;</Button>
    <Button href="#" disabled>Request a Demo &gt;</Button>

  </div>
)
