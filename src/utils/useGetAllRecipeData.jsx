import { useEffect, useState } from "react";
import { GET_ALL_RECIPE_DATA } from "./Constants";

const useGetAllRecipeData = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const data = await fetch(GET_ALL_RECIPE_DATA);
        const response = await data.json();
        setRecipes(response.recipes || null);
    };

    return recipes;
};

export default useGetAllRecipeData;
