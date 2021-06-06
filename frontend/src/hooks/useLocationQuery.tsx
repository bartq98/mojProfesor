import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

type Props = {
    keys: string[];
};
const useLocationQuery = ({ keys }: Props) => {
    const [result, setResult] = useState<string[]>([]);
    const location = useLocation();

    useEffect(() => {
        const urlSearch = new URLSearchParams(location.search);
        urlSearch.forEach((value, key) => {
            if (keys.includes(key)) {
                setResult(prevRes => [...prevRes, value]);
            }
        });
    }, [location.pathname]);

    return {
        params: result,
        hasParams: result.length > 0,
    };
};

export default useLocationQuery;
