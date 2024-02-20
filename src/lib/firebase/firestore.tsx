import { Firestore, collection, getDocs } from "firebase/firestore";
import { db } from '@/lib/firebase/firebase';

export class charity { 
    id: string = "THIS IS NOT A VALID ID";
    path_name: string = "THIS IS NOT A VALID PATH NAME";
    name: string = "Unnamed Charity";
    description: string = "No description has been provided.";
    website: string = "#"
    location: string = "None provided."
    img_href: string = "/leaf.png";
    rating: number = 0;
    tags: Array<string> = [];
    verified: boolean = false;
};

export async function getCharities(db: Firestore): Promise<charity[]> {
    const querySnapshot = await getDocs(collection(db, "charities"));
    let charities: charity[] = [];
    querySnapshot.forEach((doc) => {
        charities.push(Object.assign(new charity(), doc.data()));
        charities[charities.length - 1].id = doc.id;
        charities[charities.length - 1].path_name = generatePathName(doc);
    });
    return charities;
}



export async function getCharityPathList(): Promise<string[]> {
    const querySnapshot = await getDocs(collection(db, "charities"));
    let charities: string[] = [];
    querySnapshot.forEach((doc) => {
        charities.push(generatePathName(doc));
    });
    return charities;
}

export function generatePathName(snapshot: any): string {
    const name = snapshot.data().name;
    if (name != undefined) {
        return name.split(' ').join("-").toLowerCase() + '-' + snapshot.id.substring(0, 4);
    } else {
        return `unnamed-charity-${snapshot.id.substring(0, 4)}`;
    }
}

