import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Retro Meme</title>
        <meta name="description" content="A retro-style website experience." />
      </Head>
      <main className="bg-gray-200 min-h-screen flex flex-col items-center font-mono">
        <header className="w-full bg-blue-800 text-white p-4 text-center">
          <h1 className="text-4xl mb-2">🌐 Welcome to the Retro Memes 🌐</h1>
          <marquee>Exploring the memes, 90s Style!</marquee>
        </header>

        <div className="mt-6 w-3/4 bg-white border-4 border-gray-600 p-4 shadow-lg">
          <h2 className="text-xl mb-4 border-b-2 border-gray-800 pb-2">
            About This project
          </h2>
          <p className="mb-4">
            Our aim to alive again 90s memes inspired by the web designs of the 1990s. Experience the nostalgia of pixelated graphics, marquee text, and old-school vibes!
          </p>

          <h3 className="text-lg mb-2 border-b pb-1">Features:</h3>
          <ul className="list-disc pl-6">
            <li>OG memes</li>
            <li>My Uncle will love</li>
            <li>90s vibe</li>
          </ul>
        </div>

        <footer className="mt-auto w-full bg-blue-800 text-white p-4 text-center">
          <p>&copy; 1999 The Retro meme. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}
