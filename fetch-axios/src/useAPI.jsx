import axios from "axios";
import { useEffect, useState } from 'react'
export default function useAPI(api) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(api);
            setData(res.data);

        }
        catch (error) {
            console.log("Error while fetching data " + error);
            setError(error);
        }
        finally {
            setLoading(false);
            console.log("Data fetched successfully");
        }
    }
    useEffect(() => {
        getData();
    }, [api])
    return {
        data,
        setData,
        setError,
        setLoading,
        loading,
        error,
    }
}