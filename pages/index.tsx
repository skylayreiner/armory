import React from 'react'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="xl:container min-h-screen mx-auto px-4 bg-black">
        <div className="flex flex-wrap justify-start">
          <div className="w-max lg:w-1/12 px-4 lg:order-1">
            <div className="flex justify-center py-4 lg:pt-4 pt-8">
              <div className="mr-4 p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                  22
                </span>
                <span className="text-sm text-gray-500">Friends</span>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:container mx-auto text-center">
          <h3 className="text-4xl font-semibold leading-normal text-gray-200 mb-2">
            Armory
          </h3>
        </div>
      </div>
    </Layout>
  )
}
