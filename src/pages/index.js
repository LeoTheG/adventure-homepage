// import { LogoImage, PlayerImage } from "../components/image"

import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import playerGIF from "../images/audio-editor-info.gif"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>who we are</h1>
    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
        marginTop: "1.5em",
      }}
    >
      <Img fluid={data.logo.childImageSharp.fluid} />
      {/* <LogoImage /> */}
    </div>
    <h4>
      a cutting-edge software company focused on the next evolution of music
    </h4>
    {/* <h3>music 3.0</h3> */}
    <p>a.i. as a new source of music</p>
    <p>
      blockchain / crypto technologies allow for monetization and ownership of
      songs
    </p>
    <p>
      ar / vr (augmented/virtual reality) create immersive, collaborative
      experiences
    </p>

    <p>
      we are a collective of 30+ software developers including engineers,
      product managers, and artists
    </p>

    <h1>our products</h1>

    <h3>yee player</h3>
    <a target="_blank" rel="noreferrer" href="https://yeeplayer.com/">
      yeeplayer.com
    </a>
    {/* <PlayerImage /> */}
    {/* <Img fluid={data.player.childImageSharp.fluid} /> */}
    <img src={playerGIF} alt="how to use the player" />

    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "adventure-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
