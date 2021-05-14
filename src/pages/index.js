import * as React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
// import Layout from '../components/layout'
import Navigation from '../components/nav'
import Hero from '../components/hero'
import HeroCard from '../components/hero-card'
import Layout from '../templates/layout'


class RootIndex extends React.Component {
  render() {
    const nav = get(this, 'props.data.allContentfulHeaderLinks.edges')
    const [hero] = get(this, 'props.data.allContentfulHero.edges')
    const cards = get(this, 'props.data.allContentfulHeroCard.edges')

    return(
      // <Layout location={this.props.location}/>
   
      <Layout location={this.props.location}>
          <Navigation data={ nav }/>    
          <Hero data={ hero.node }/>
          <div>
              {cards.map(({ node }) => {
                return (
                  <div key={node.slug}>
                    <HeroCard data={node} />
                  </div>
                )
              })}
          </div>
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
  allContentfulHeroCard {
	  edges {
	    node {
	      heroCardTitle
        heroCardLinkUrl
        heroCardDescription
        heroCardImage {
          file {
            url
            fileName
            contentType
          }
        }
	    }
	  }
	}
  
}


`
export default RootIndex