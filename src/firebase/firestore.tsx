import { Firestore, collection, getDocs } from "firebase/firestore";

export class charity { 
    name: string = "Default Charity Name";
    description: string = "This is the default charity description.";
    img_href: string = "/question.png";
    rating: number = 0;
    tags: Array<string> = [];
};

export async function getCharities(db: Firestore): Promise<charity[]> {
    const querySnapshot = await getDocs(collection(db, "charities"));
    let charities: charity[] = [];
    querySnapshot.forEach((doc) => {
        charities.push(Object.assign(new charity(), doc.data()));
    });
    return charities;
}