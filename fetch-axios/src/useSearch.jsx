import { useState, useMemo } from 'react';

export default function useSearch(cities, key) {
    const [search, setsearch] = useState("");

    const filtered = useMemo(() => {

        return cities.filter((city) => 
             city[key].toUpperCase().includes(search.toUpperCase()) 
        );
    }, [search, key, cities])

    return  {
            search,
            setsearch,
            filtered
        }
    
}