import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Home - Netflix</title>
          <link rel="icon" href="/favico.ico" />
        </Head>
        <Header />
        <main>
          <section>
            {/* row */}
            {/* row */}
            {/* row */}
            {/* row */}
            {/* row */}
          </section>
        </main>
        {/* modal */}
      </div>

    </>
  )
}

export default Home