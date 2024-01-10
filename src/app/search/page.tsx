import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About us page',
}


export default function Search() {
    return (
        <>
            <div className="block bg-white w-full p-4 pt-8">
                <h1 className="text-3xl font-semibold mb-2">Seach Charities</h1>
                <h3>Search through Giving Garden&apos;s extensive database of charities, vetted thoroughly through our <Link href="#" className="hyperlink">verification system</Link>.</h3>
            </div>
        </>
    );
}