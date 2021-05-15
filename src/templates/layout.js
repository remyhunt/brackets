import React from 'react';
import Container from 'react-bootstrap/Container';
import { graphql } from 'gatsby';
import './layout.module.css';


class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
        <Container>
               
            {children}
        </Container>
    )
  }
}


export const layoutQuery = graphql`
query layoutQuery {
  allContentfulHeaderLinks {
    edges {
      node {
        pageTitle
        pageSlug
      }
    }
  }
}
`
export default Template