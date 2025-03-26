// CityProvider.js
import React, { useState } from "react";
import Context from "../context/Contexts";
import { GetRequest } from "../utils/AxiosRequest"
import { BaseUrlPath } from "../utils/contants";

const CityProvider = ({ children }) => {
    const [cities, setCities] = useState(null);

    const getCities = async (query_params) => {
        const response = await GetRequest(`${BaseUrlPath}api/cities`, query_params);
        if (response) {
            setCities(response.data.results);
        }
    }
    const data = {
        cities, getCities
    };
    return (
        <Context.CitiesContext.Provider value={data}>
            {children}
        </Context.CitiesContext.Provider>
    );
};

export default CityProvider;
