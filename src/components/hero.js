import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class Hero extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let h5 = {
            textTransform: 'uppercase',
        };
        return (
            <Col lg={5} >
                <h5 style={h5}> {this.props.data.subtitleTop} </h5>
                <h1> {this.props.data.title}</h1>
                <p> {this.props.data.subtitleBottom} </p>
                <Button variant="primary" href="#">Get started &gt;</Button>
                <Button variant="secondary" href="#">Request a demo &gt;</Button>
            </Col>
        )
    }

}

export default Hero;