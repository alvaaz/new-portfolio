import React from 'react'
import Icon from '../components/icons'

export function ListRepositories() {
  // TO-DO fetch repository data from github
  const repositories = [
    {
      id: 0,
      name: 'google-meet-clone',
      url: 'https://github.com/alvaaz/google-meet-clone',
      description: ' This is a clone of Google Meet using Remix, Prisma and Twilio',
      language: 'typescript',
    },
    {
      id: 1,
      name: 'tweeter-clone',
      url: 'https://github.com/alvaaz/tweeter-twitter-clone',
      description: ' Twitter clone using NodeJS. ',
      language: 'css',
    },
    {
      id: 2,
      name: 'Agenda',
      url: 'https://github.com/alvaaz/hcvm',
      description: 'App to book doctor appointment',
      language: 'typescript',
    },
    {
      id: 3,
      name: 'getmeurl',
      url: 'https://github.com/alvaaz/getmeurl',
      description: 'Comparte unos buenos pantallazos',
      language: 'typescript',
    },
  ]

  return (
    <div className="flex justify-between lg:gap-x-7 flex-col flex-col-reverse lg:flex-row items-start">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 mb-8 sm:mb-0 w-full lg:w-5/6">
        {repositories.map((repository) => (
          <a
            href={repository.url}
            target="_blank"
            key={repository.id}
            className="border dark:border-gray-500 border-gray-300 hover:border-gray-400 dark:hover:border-gray-400 p-4 rounded-xl col-span-2 transition ease-in-out duration-300 "
          >
            <div className="flex items-center gap-3">
              <Icon
                name="repository"
                className="fill-gray-900 dark:fill-gray-400"
              />
              <h6 className="font-semibold text-lg sm:text-xl mb-0 text-gray-800 dark:text-white">
                {repository.name}
              </h6>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-xl my-4">
              {repository.description}
            </p>
            <div className="flex items-center">
              <Icon name={repository.language} className="w-7 h-7" />
            </div>
          </a>
        ))}
      </div>
      <ul className="squares dark:after:bg-gray-900 after:bg-white w-full lg:w-1/6">
        {[...Array(200)].map((_, index) => (
          <li key={index} style={{ animationDelay: `${Math.random()}s` }}></li>
        ))}
      </ul>
    </div>
  )
}
