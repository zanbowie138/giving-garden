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
    title: 'Search | Giving Garden',
    description: 'Search for charities',
}

export default async function Search() {
    const charities = await getCharities(db);
    return (
        <>
            <div className="block bg-white w-full p-4 pt-8">
                <h1 className="text-3xl font-semibold mb-2">Seach Charities</h1>
                <h3 className="mb-5" >Search through Giving Garden&apos;s extensive database of charities, vetted thoroughly through our <Link href="#" className="hyperlink">verification system</Link>.</h3>
                <div className="flex flex-row mb-10 gap-6">
                    <input className="w-full p-2 h-full border-2 rounded-sm border-black" type="text" placeholder="Search by name, tag, location..."/>
                    <button className="bg-sky-400 rounded-md w-fit px-5">Search</button>
                </div>
            </div>
            <div className="flex flex-row w-full pt-8">
                <div className="basis-1/4 bg-gray-200 rounded-sm">
                    <h1 className="text-1xl font-semibold mb-2">Filters</h1>
                </div>
                <div className="bg-gray-100 w-full p-4 rounded-sm">
                    <h3 className="mb-2">{new Intl.NumberFormat().format(charities.length)} results found.</h3>
                    {charities.map((o, index) =>
                        CharityCard(o)
                    )}
                </div>
            </div>
        </>
    );
}