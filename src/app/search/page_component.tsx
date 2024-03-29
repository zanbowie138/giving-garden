"use client";
import { db } from '@/lib/firebase/firebase';
import { charity, getCharities } from '@/lib/firebase/firestore';
import CharityCard from '@/components/cards/charity_card';
import React, {useRef, useEffect, useState} from 'react';
import Link from 'next/link';

function CharityList({charities}: {charities: charity[]}) {
    return (<>{charities.length != 0 ? 
        charities.map((o, index) => CharityCard(o)) : 
        <h1 className="text-1xl m-5">No results found.</h1>}</>);
}

export default function SearchPage() {
    const queryRef = useRef("");
    const [charities, setCharities] = useState<charity[]>([]);

    useEffect(() => {
        updateCharityList();
    }, []);

    function updateCharityList() {
        let ignore = false;
        async function updateCharities(query: string) {
            const charities = await getCharities(db);
            const filtered_charities = query=="" ? charities : charities.filter((charity) => {
                return charity.name.toLowerCase().includes(query.toLowerCase()) ||
                    charity.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
                    charity.location.toLowerCase().includes(query.toLowerCase());
            });

            setCharities(filtered_charities);
        }
        
        updateCharities(queryRef.current);
        return () => { ignore = true; };
    }

    return (
        <>
            <div className="block bg-white w-full p-4 pt-8">
                <h1 className="text-3xl font-semibold mb-2">Seach Charities</h1>
                <h3 className="mb-5" >Search through Giving Garden&apos;s extensive database of charities, vetted thoroughly through our <Link href="#" className="hyperlink">verification system</Link>.</h3>
                <div className="flex flex-row gap-6">
                    <input className="w-full p-2 h-full border-2 rounded-sm border-black" type="text" placeholder="Search by name, tag, location..." onChange={e => {queryRef.current = e.target.value}} onKeyDownCapture={event => { if (event.key === 'Enter') { updateCharityList(); }}} />
                    <button className="bg-sky-400 hover:drop-shadow-md rounded-md w-fit px-5" onClick={updateCharityList}>Search</button>
                </div>
                <hr className="my-5"></hr>
                <div className="flex flex-row content-center">
                    <h3 className="mb-2 text-sm h-max">{new Intl.NumberFormat().format(charities.length)} results found.</h3>
                    <div className="flex flex-row ml-auto h-max">
                        <h2 className="">Sort by: </h2>
                        <select name="sort">
                            <option value="relevance">Relevance</option>
                            <option value="date_updated">Date Updated</option>
                            <option value="rating">Rating</option>
                            <option value="alphabetically">Alphabetically</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full">
                <div className="basis-1/4 bg-gray-200 rounded-sm">
                    {/* <h1 className="text-1xl font-semibold m-2 text-center">Filters</h1> */}
                </div>
                <div className="bg-gray-100 w-full p-4 rounded-sm" id="charity-list">
                    <CharityList charities={charities}/>
                </div>
            </div>
        </>
    );
}