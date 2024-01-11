import Link from 'next/link'
import {charity} from '../../firebase/firestore';
import Image from 'next/image'

export default function CharityCard(charity: charity) {
    return (
        <div className="">
            <h1 className="text-xl underline">{charity.name}</h1>
            <h3>{charity.description}</h3>
            <Image src={charity.img_href} alt={`Image of ${charity.name}.`} width="70" height="70"></Image>
        </div>
    );
}