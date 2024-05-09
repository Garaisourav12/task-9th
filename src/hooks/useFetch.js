import React, { useEffect, useState } from 'react'

function useFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const fetchedData = await response.json();
            setData(fetchedData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts');
    }, [])

    return { data, loading, error };
}

export default useFetch