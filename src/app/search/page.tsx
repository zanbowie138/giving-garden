import type { Metadata } from 'next'
import Link from 'next/link'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase_app from '../../firebase/firebase_app';
import { charity, getCharities } from '../../firebase/firestore';
import CharityCard from '../../components/cards/charity_card';

const db = getFirestore(firebase_app);

export const metadata: Metadata = {
    title: 'About Us',
    description: 'About us page',
}

export default async function Search() {
    const charities = await getCharities(db);
    return (
        <>
            <div className="block bg-white w-full p-4 pt-8">
                <h1 className="text-3xl font-semibold mb-2">Seach Charities</h1>
                <h3>Search through Giving Garden&apos;s extensive database of charities, vetted thoroughly through our <Link href="#" className="hyperlink">verification system</Link>.</h3>
            </div>
            <div className="block bg-white w-full p-4 pt-8">
                <h1 className="text-3xl font-semibold mb-2">Charities</h1>
                {charities.map((o, index) =>
                    CharityCard(o)
                )}
            </div>
        </>
    );
}