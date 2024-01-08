import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About us page',
}


export default function About() {
    return (
        <h1>About</h1>
    );
}