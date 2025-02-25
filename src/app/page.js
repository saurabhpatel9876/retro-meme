import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Retro Meme</title>
        <meta name="description" content="A retro-style website experience." />
      </Head>
      <main className="bg-gray-200 min-h-screen flex flex-col items-center font-mono">
        <header className="w-full bg-blue-800 text-white p-4 text-center">
          <h1 className="text-2xl sm:text-4xl mb-2">🌐 Welcome to the Retro Memes 🌐</h1>
          <marquee className="text-sm sm:text-base">
            Exploring the memes, 90s Style!
          </marquee>
        </header>

        <div className="mt-6 w-11/12 sm:w-3/4 bg-white border-4 border-gray-600 p-4 shadow-lg">
          <h2 className="text-lg sm:text-xl mb-4 border-b-2 border-gray-800 pb-2">
            About This Project
          </h2>
          <p className="mb-4 text-sm sm:text-base">
            Our aim is to bring 90s memes back to life, inspired by the web
            designs of the 1990s. Experience the nostalgia of pixelated graphics,
            marquee text, and old-school vibes!
          </p>

          <h3 className="text-base sm:text-lg mb-2 border-b pb-1">Features:</h3>
          <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
            <li>OG memes</li>
            <li>My Uncle will love</li>
            <li>90s vibe</li>
          </ul>
        </div>

        {/* Cards Section */}
        <section className="mt-8 w-full p-4">
          <h2 className="text-xl sm:text-2xl text-center mb-6">
            Iconic Memes Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border-2 border-gray-600 rounded-lg shadow-lg p-4">
              <img
                // src="/public/1st.png"
                src="1st"
                alt="Retro Meme 1"
                className="rounded-t-lg w-full h-40 object-cover"
              />
              <h3 className="text-lg font-bold mt-4">Meme #1</h3>
              <p className="text-sm mt-2">
                This meme was the king of the 90s internet!
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-2 border-gray-600 rounded-lg shadow-lg p-4">
              <img
                src="/images/meme2.jpg"
                alt="Retro Meme 2"
                className="rounded-t-lg w-full h-40 object-cover"
              />
              <h3 className="text-lg font-bold mt-4">Meme #2</h3>
              <p className="text-sm mt-2">
                Classic humor that never gets old.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-2 border-gray-600 rounded-lg shadow-lg p-4">
              <img
                src="/images/meme3.jpg"
                alt="Retro Meme 3"
                className="rounded-t-lg w-full h-40 object-cover"
              />
              <h3 className="text-lg font-bold mt-4">Meme #3</h3>
              <p className="text-sm mt-2">
                Relive the golden era of online jokes.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-auto w-full bg-blue-800 text-white p-4 text-center text-xs sm:text-sm">
          <p>&copy; 1999 The Retro Meme. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}
