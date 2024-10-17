import React, { createContext, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [data, setData] = useState(null);

    const fetchData = () => {
        axios.get("https://final-project-api-alpha.vercel.app/api/jobs")
            .then((response) => {
                setData(response.data.data); 
            })
            .catch((error) => {
                console.error("Error fetching data", error);
            });
    };

    return (
        <GlobalContext.Provider value={{ data, fetchData }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
