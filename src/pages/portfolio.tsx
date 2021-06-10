import React from 'react'
import { SEO } from '../components'

const Blog = () => {
  return (
    <>
      <SEO title="All projects" />
      <div className="mb-16">
        <h4 className="text-5xl sm:text-4xl font-bold mb-8 text-yellow-600">
          Portfolio
        </h4>
        <p className="text-3xl font-semibold dark:text-white w-8/12">
          With Visual Look Up, you can quickly learn more about art, landmarks,
          nature, books, and pets simply by tapping a photo on your device or on
          the web.
        </p>
      </div>
      <section className="grid grid-cols-12 gap-8">
        <article className="cursor-pointer transform transition ease-in-out duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl p-10 text-2xl col-span-4">
          <p className="text-yellow-600 mb-4">Montt</p>
          <p className="dark:text-white">
            Get everything you already love about iCloud — and new features
            including iCloud Private Relay, Hide My Email, and expanded HomeKit
            Secure Video support.
          </p>
        </article>
        <article className="cursor-pointer transform transition ease-in-out duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl p-10 text-2xl col-span-4">
          <p className="text-yellow-600 mb-4">Montt</p>
          <p className="dark:text-white">
            Get everything you already love about iCloud — and new features
            including iCloud Private Relay, Hide My Email, and expanded HomeKit
            Secure Video support.
          </p>
        </article>
        <article className="cursor-pointer transform transition ease-in-out duration-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl p-10 text-2xl col-span-4">
          <p className="text-yellow-600 mb-4">Montt</p>
          <p className="dark:text-white">
            Get everything you already love about iCloud — and new features
            including iCloud Private Relay, Hide My Email, and expanded HomeKit
            Secure Video support.
          </p>
        </article>
      </section>
    </>
  )
}

export default Blog
