import * as React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import HeroCard from '../components/hero-card'
import Layout from '../templates/layout'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/base.css';

class RootIndex extends React.Component {
  render() {
    const nav = get(this, 'props.data.allContentfulHeaderLinks.edges')
    const [hero] = get(this, 'props.data.allContentfulHero.edges')
    const cards = get(this, 'props.data.allContentfulHeroCard.edges')

    return(

      <Layout location={this.props.location} >
          <Navigation data={ nav }/>
          <Row className="heroCardRow">
            <Hero className="hero" data={ hero.node }/>
          </Row>
          <Row className="heroCardRow">
              {cards.map(({ node }) => {
                return (
                  <Col xs={12} md={12} lg={4} xl={4}>
                  <div key={node.slug}>
                    <HeroCard data={node} />
                  </div>
                  </Col>
                )
              })}
          </Row>
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
  allContentfulHeaderLinks(sort: {fields: contentful_id, order: DESC}) {
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