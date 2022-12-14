import type { NextPage } from 'next'
import Head from 'next/head'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
  const restaurants = await prisma.restaurant.findMany();
  return { props: { restaurants: JSON.parse(JSON.stringify(restaurants)) } }
}

const Home: NextPage = ({ restaurants }: any) => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        {restaurants.map((r: any) => <div>{r.name}</div>)}
      </h1>
    </div>
  )
}

export default Home
