// exports.createPages = async function ({ actions, graphql }) {
//     const { data } = await graphql(`
//     query {
//       allContentfulPage {
//         nodes {
//           pageMetadata {
//             slug
//           }
//         }
//       }
//     }
//     `)
//     // data.allContentfulPage.nodes.forEach(node => {
//     //   const slug = node.pageMetaData.slug
//     //   actions.createPage({
//     //     path: slug,
//     //     component: require.resolve(`./src/pages/page.js`),
//     //     context: { slug: slug },
//     //   })
//     // })
//   }