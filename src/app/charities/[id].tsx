export default function CharityPage() {
    return (
        <h1>About</h1>
    );
}

export async function getStaticPaths() {
    const querySnapshot = await getDocs(collection(db, "charities"));
    return {
        paths:
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
}