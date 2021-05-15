import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './hero.module.css';

class Hero extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col lg={5} className='hero'>
                <h5> {this.props.data.subtitleTop} </h5>
                <h1> {this.props.data.title}</h1>
                <p> {this.props.data.subtitleBottom} </p>
                <Button href="#">Get Started &gt;</Button>
                <Button href="#" disabled>Request a Demo &gt;</Button>
            </Col>
        )
    }

}

export default Hero;