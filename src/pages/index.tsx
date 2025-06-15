import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Card Rummy APK Pakistan</title>
        <meta name="description" content="Play Card Rummy online with friends" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">
            Card Rummy APK Pakistan
          </h1>
          <p className="text-xl mb-8">
            Download the latest version for Android
          </p>
          <a 
            href="https://pkcardrummy.com/?from_gameid=5784509&channelCode=100000"
            className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors"
          >
            Download Now
          </a>
        </div>
      </main>
    </>
  )
} 