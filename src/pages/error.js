import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

const ErrorPage = () => {
  return (
    <>
      <Helmet title="Error | Beautiful Dienstplan" defer={false} />
      <Layout>
        <h2>Oops. Sorry, the server is down!</h2>
      </Layout>
    </>
  )
}

export default ErrorPage
