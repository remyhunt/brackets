import * as React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
// import Layout from '../components/layout'
import Navigation from '../components/nav'
import Hero from '../components/hero'
import Layout from '../components/layout'


class RootIndex extends React.Component {
  render() {
    const nav = get(this, 'props.data.allContentfulHeaderLinks.edges')
    const [hero] = get(this, 'props.data.allContentfulHero.edges')

    return(
      // <Layout location={this.props.location}/>
   
      <Layout location={this.props.location}>
          <Navigation data={ nav }/>    
          <Hero data={ hero.node }/>
      </Layout>
    )
  }
}
// const HomePage = ({data}) => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }
export const rootQuery = graphql`
query rootQuery {
  allContentfulHeaderLinks {
    edges {
      node {
        pageTitle
        pageSlug
      }
    }
  }
  allContentfulHero {
	  edges {
	    node {
        title
        subtitleTop
        subtitleBottom
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
export default RootIndex