import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './navigation.module.css';



class Navigation extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row className = 'nav'>
          <Col md={8}>
          Logo Here
          </Col>
          <Col md={4}>
          <ul className="pages-list">
                {this.props.data.map(({ node }) => { 
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
  }
}
export default Navigation
