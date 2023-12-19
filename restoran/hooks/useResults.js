import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {

    const [results, setResults] = useState([]);

    const searchApi = async (searchTerm) => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'İstanbul',
            },
        });
        setResults(response.data.businesses);
    };

    useEffect(() => {
        searchApi('Toast');
    }, []);

    return [searchApi, results];

}