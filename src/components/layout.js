import React from 'react'
import get from 'lodash/get'

import Container from './container'
import Navigation from './nav'

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