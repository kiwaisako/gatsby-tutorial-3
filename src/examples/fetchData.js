import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { author },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h2>{data.site.siteMetadata.title}</h2> */}
      <h2>{author}</h2>
    </div>
  )
}

export default FetchData
