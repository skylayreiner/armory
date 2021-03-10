import React from 'react'
import Layout from '../components/layout'
import Searchbar from '../components/searchbar/Searchbar'

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-rows-3 sm:grid-rows-5 justify-center h-full">
        <div className="row-start-1 sm:row-start-4 self-end">
          <div className="flex flex-col mb-2">
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="test"
            />
            <h1 className="text-5xl text-bold uppercase text-center text-gray-200">armory</h1>
          </div>
        </div>
        <div className="justify-self-center row-start-2 sm:row-start-5">
          <Searchbar />
        </div>
      </div>
    </Layout>
  )
}
