import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Navigation extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row className = 'navigation'>
          <Col md={4}>
              <div className = "logo">
                Logo Here

              </div>
          </Col>
          <Col md={8}>
          <ul>
                {this.props.data.map(({ node }) => { 
                  return (
                    <li className="navigationLinks" key={node.pageTitle}>
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
