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
                {(() => {
                    const arr = [];
                    for (let i = 0; i < charity.rating; i++) {
                        arr.push(
                            <svg className="size-5 float-left fill-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                            </svg>
                        );
                    }
                    for (let i = 0; i < 5-charity.rating; i++) {
                        arr.push(
                            <svg className="size-5 float-left fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                        </svg>
                        );
                    }
                    return arr;
                })()}
            </div>
        </div>
    );
}