import { useEffect, useState } from "react";
import { SEARCH_RECIPE_DETAILS_API } from "./Constants";

const useRecipeDetails = (id) => {
    const [recipeDetails, setRecipeDetails] = useState([]);

    useEffect(() => {
        getRecipeDetails(id);
    }, []);

    const getRecipeDetails = async () => {
        const response = await fetch(SEARCH_RECIPE_DETAILS_API + id);
        const getData = await response.json();
        setRecipeDetails(getData);
    };

    return recipeDetails;
};

export default useRecipeDetails;
