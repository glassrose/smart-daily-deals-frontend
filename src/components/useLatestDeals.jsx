import React, {useState} from 'react';

function useLatestDeals(newLatestDeals) {
    const [latestDeals, setLatestDeals] = useState([]);
    if (newLatestDeals != null) {
        console.log("Updated active deals:" + newLatestDeals);
        setLatestDeals(newLatestDeals);
    }
    return latestDeals;
}

export default useLatestDeals;