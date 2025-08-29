import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

export default function CountriesApiServices() {
    const [countriesApi, setCountriesApi] = useState<string[]>([])
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const countriesServices = await fetch("https://restcountries.com/v3.1/all?fields=name");
                if (!countriesServices.ok) {
                    throw new Error(`HTTP error! status: ${countriesServices.status}`);
                }
                const data = await countriesServices.json();
                const sortedCountries = data.map((z: any) => z.name.common).sort((a: string, b: string) => a.localeCompare(b));
                console.log("✅ Countries fetched:", sortedCountries.length); 
                setCountriesApi(sortedCountries);
            } catch (err) {
                console.error("fetch failed:", err);
            }
        };

        fetchCountries();
    }, []);
    return {
        countriesApi,
        setCountriesApi
    }
}