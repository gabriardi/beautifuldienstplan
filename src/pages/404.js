import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

const NotFoundPage = () => (
  <>
    <Helmet title="404 | Beautiful Dienstplan" defer={false} />
    <Layout>
      <h2>You just hit a route that doesn&#39;t exist... the sadness.</h2>
    </Layout>
  </>
)

export default NotFoundPage
