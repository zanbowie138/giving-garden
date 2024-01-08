import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <p>
        <Link href="/about">
          About
        </Link>
      </p>
    </main>
  )
}
