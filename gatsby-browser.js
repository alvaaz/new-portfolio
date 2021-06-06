import React from 'react'
import Layout from './src/components/Layout'
import './src/css/global.css'

export function wrapPageElement({ element }) {
  return <Layout>{element}</Layout>
}
