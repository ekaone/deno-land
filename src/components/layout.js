/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Deno Indonesia
          {` `}
          <a
            href="https://twitter.com/LandDeno"
            style={{ textDecoration: "none", color: "darkorchid" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          <a
            href="https://blog.denoland.id/"
            style={{ textDecoration: "none", color: "darkorchid" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>{" "}
          <a
            href="https://t.me/deno_id"
            style={{ textDecoration: "none", color: "darkorchid" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
