import { Firestore, collection, getDocs } from "firebase/firestore";

export class charity { 
    name: string = "Unnamed Charity";
    description: string = "No description has been provided.";
    img_href: string = "/question.png";
    rating: number = 0;
    tags: Array<string> = [];
    verified: boolean = false;
};

export async function getCharities(db: Firestore): Promise<charity[]> {
    const querySnapshot = await getDocs(collection(db, "charities"));
    let charities: charity[] = [];
    querySnapshot.forEach((doc) => {
        charities.push(Object.assign(new charity(), doc.data()));
    });
    return charities;
}