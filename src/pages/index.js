import * as React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
// import Layout from '../components/layout'
import Navigation from '../components/nav'


class RootIndex extends React.Component {
  render() {
    const pages = get(this, 'props.data.allContentfulPage.edges')

    return(
      // <Layout location={this.props.location}/>
      // <Navigation data={pages}/>
     
      <div className="wrapper"> 
        <Navigation data={pages} />
    </div>
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
  allContentfulPage {
    edges {
      node {
        identifier
        pageMetadata {
          identifier
          pageTitle
          pageDescription
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
      }
    }
  }
}

`
export default RootIndex