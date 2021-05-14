import React from 'react'

export default ( { data }) => (
  <div>
    <ul className="pages-list">
          {data.map(({ node }) => { 
            return (
              <li key={node.slug}>
                {node.identifier}
              </li>
            )
          })}
        </ul>
  </div>
)
