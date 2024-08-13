import React from 'react';
import Layout from '../pages/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
              alt="Silhouette of a man"
              src="../images/silhouette-man.png" />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage;
