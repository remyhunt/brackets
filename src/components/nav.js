import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default ( { data }) => (
  <div>
    <Row>
      <Col md={8}>
      Logo Here
      </Col>
      <Col md={4}>
      <ul className="pages-list">
            {data.map(({ node }) => { 
              return (
                <li key={node.pageTitle}>
                  {node.pageTitle}
                </li>
              )
            })}
            <li> 
            <Button>Get Started &gt;</Button>  
            </li>
      </ul>
      </Col>
    </Row>
  </div>
)
