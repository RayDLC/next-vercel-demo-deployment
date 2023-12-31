import Head from 'next/head'
import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'
import { Inter } from 'next/font/google'

import React, { FC, PropsWithChildren }  from "react"


const inter = Inter({ subsets: ['latin'] })

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home | Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={`${styles.main} ${inter.className}`}>
        { children }
      </main>
    </>
  )
}

export default MainLayout
