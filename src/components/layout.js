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


export const rootQuery = graphql`
query rootQuery {
  allContentfulHeaderLinks{
    edges {
      node {
        pageTitle
        pageSlug
      }
    }
  }
  allContentfulPage(
      filter: { identifier: { eq: "Homepage" } }
    ){
    edges {
      node {
        identifier
        pageMetadata {
          identifier
          pageTitle
          pageDescription
          slug
        }
        hero {
          identifier
          title
          subtitleTop
          subtitleBottom
        }
        heroCards {
          identifier
          heroCardTitle
          heroCardDescription
          heroCardImage {
            file {
              url
            }
          }
        }
        navigation {
          pageTitle
          pageSlug
        }
      }
    }
  }
}


`
export default Template