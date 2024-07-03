import { createContext, useContext, useEffect, useState } from "react";

 const AppContext = createContext();
export const useGlobalContext = () => useContext (AppContext);

export const AppProvider = ({children})  => {
    const [isLoading, setIsLoading] = useState(true);
    const [foods, setFoods] = useState ([])
    const [searchValue, setSearchValue] = useState('');
    // console.log(searchValue);

    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    // 25

    const getData =async () => {
        try {
        const res = await fetch(`${url}${searchValue}`);
            const data = await res.json();
            setIsLoading(false);
            console.log(data.meals);
        if ( data.meals) {
            setFoods(data.meals);
        } else {
            setFoods([]);
        }

           
        } catch (error) {
           console.log(error); 
        };
    };
     
    useEffect (() => {
        setTimeout (() => {
     getData();
    }, 3000)
    }, [searchValue]);


return (
     <AppContext.Provider value={{ isLoading, foods, searchValue, setSearchValue }}>
   {children}
</AppContext.Provider>
);
};