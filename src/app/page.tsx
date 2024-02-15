import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="p-5 bg-[#2e4730]">
        <div className="flex flex-row content-center">
          <div className="basis-1/2">
            <h1 className="text-5xl font-bold my-5 text-[#c1d4c2] underline">Searching for the perfect non-profit?</h1>
            <h1 className="text-4xl font-bold my-5 text-theme_pink-50">You&apos;ve come to the right place.</h1>
            <p className="mt-7 mb-7 text-white text-lg">
              Our platform connects donors with charities from all over the world.
              You can explore different charities, learn about their mission, and make a contribution to causes you care about.
              Start your giving journey with us today!
            </p>
          </div>
          <div className='m-auto'>
            <Image src="/environment.jpg" width={300} height={300} alt="Charity Image" className='rounded-lg m-auto' />
          </div>
        </div>
        <Link href="/search">
          <h1 className="bg-[#a5d9a7] py-3 px-8 rounded-lg my-1 font-semibold hover:bg-[#97c79a] w-fit">Get Searching</h1>
        </Link>
      </div>
    </main>
  )
}
