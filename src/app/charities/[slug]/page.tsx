import { charity, getCharities } from "@/lib/firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from "next";
import Link from "next/link";
import Rating from "@/components/Rating";

export var metadata: Metadata = {
    title: 'Loading | Giving Garden',
    description: 'Loading...',
}

export default async function CharityPage({ params }: { params: { slug: string } }) {
    const charity = await getCharities(db).then((charities) => {
        return charities.find((charity) => charity.path_name == params.slug)
    });

    if (charity == undefined) {
        metadata = {
            title: 'Not found | Giving Garden',
            description: 'Charity not found',
        }
        return notFound();
    } else {
        metadata = {
            title: `${charity.name} | Giving Garden`,
            description: `Page for ${charity.name}.`,
        }
        return CharityPageImpl(charity);
    }
}

function CharityPageImpl(charity: charity) {
    return (
        <>
            <div className="block bg-white w-full p-4 pt-8 drop-shadow-md">
                <h1 className="text-5xl font-semibold mb-2">{charity.name}</h1>
                <span className="inline-block align-top m-1" title={`Rating: ${charity.rating}`}>
                    {Rating(charity.rating)}
                </span>
                <h3 className="mb-5" >Search through Giving Garden&apos;s extensive database of charities, vetted thoroughly through our <Link href="#" className="hyperlink">verification system</Link>.</h3>
                <hr className="my-5"></hr>
            </div>
        </>
    );
}

export async function generateStaticParams() {
    const charities = await getCharities(db);
    return charities.map((charity) => ({
        slug: charity.path_name,
    }));
}