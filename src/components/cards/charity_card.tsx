import Link from 'next/link'
import { charity } from '../../lib/firebase/firestore';
import Image from 'next/image'

export default function CharityCard(charity: charity) {
    return (
        <div className="flex flex-row mb-10 bg-white rounded-md p-5">
            <div className="basis-1/4">
                <Image src={charity.img_href} alt={`Image of ${charity.name}.`} width="125" height="125" className="basis-1/4"></Image>
            </div>
            <div className="basis-1/2">
                <h1 className="text-xl underline">{charity.name}</h1>
                <h3>{charity.description}</h3>
            </div>
            <div className="basis-1/4">
                <h3>Further descriptions</h3>
            </div>
        </div>
    );
}