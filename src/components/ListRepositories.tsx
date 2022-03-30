import React from 'react'
import { Repository } from '../components/icons'

export function ListRepositories() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-8 items-start">
        {[...Array(4)].map(() => (
          <a
            href="#"
            className="border dark:border-gray-200 border-gray-700 hover:border-gray-600 dark:hover:border-gray-100 p-4 rounded-xl col-span-2 transition ease-in-out duration-300 "
          >
            <div className="flex items-center gap-3">
              <Repository />
              <h3 className="text-xl mb-0">getmeurl</h3>
            </div>
            <p className="text-gray-400 text-base sm:text-xl mb-0">
              Comparte unos buenos pantallazos
            </p>
          </a>
        ))}
      </div>
      <div className="squares">
        {[...Array(154)].map(() => (
          <li style={{ animationDelay: `${Math.random()}s` }}></li>
        ))}
      </div>
    </>
  )
}
