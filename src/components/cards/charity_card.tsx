import Link from 'next/link'
import { charity } from '../../lib/firebase/firestore';
import Image from 'next/image'
import Rating from '../addons/Rating';
import Tag from '../addons/Tag';

export default function CharityCard(charity: charity) {
    return (
        <div className="mb-10 bg-white rounded-md border-8 bg-theme_green-200 drop-shadow-md hover:drop-shadow-xl">
            <div className="flex flex-row border-b-2">
                <div className="basis-1/4 p-5 border-r-2 border-d-2 border-green-500">
                    <Image className="basis-1/4 m-auto" src={charity.img_href} alt={`Image of ${charity.name}.`} width="125" height="125"></Image>
                </div>
                <div className="basis-1/2 p-5">
                    <h1 className="text-xl underline">{charity.name}</h1>
                    <div className="h-max">
                        <h3>{truncate(charity.description,150)}</h3>
                        <Link href={`/charities/${charity.path_name}`} className="hyperlink text-sm">Read more</Link>
                    </div>
                </div>
                <div className="basis-1/4 p-5 border-l-2">
                    <h3 className="text-md mb-2 underline">{charity.verified? "Verified: Yes": "Verified: No"}</h3>
                    <h3 className="text-lg">Rating:</h3>
                    <span className="inline-block mb-2" title={`Rating: ${charity.rating}`}>
                            {Rating(charity.rating)}
                        </span>
                    <div className="my-2">
                        <h3 className="text-lg mb-2">Tags:</h3>
                        <div>
                            {charity.tags.map((tag_name, index) => (
                                <span key={index}>{Tag(tag_name)}</span>
                            ))}
                            {charity.tags.length == 0 && <h3>No tags have been added.</h3>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <input className="align-right" type="checkbox" id="list" name="list" value="Bike" />
                <label className="text-center" htmlFor="list">Add to list</label>
            </div>
        </div>
    );
}

function truncate(str: string, n: number){
    return (str.length > n) ? str.slice(0, n-1) + "..." : str;
};