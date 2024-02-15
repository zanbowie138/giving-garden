import type { Metadata } from 'next'
import SearchPage from './page_component';

export const metadata: Metadata = {
    title: 'Search | Giving Garden',
    description: 'Search for charities',
}

export default function Search() {
    return (<SearchPage />);
}