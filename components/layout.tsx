import Head from 'next/head'
import React from 'react'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <main>{children}</main>
    </div>
  )
}
