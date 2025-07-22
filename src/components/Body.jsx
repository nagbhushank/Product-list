import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const Body = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const data = await fetch("https://dummyjson.com/recipes");
        const response = await data.json();
        console.log(response.recipes);
        setRecipes(response.recipes);
    };

    return (
        <div className="body">
            <RecipeCard recipes={recipes} data={"OKAY"} />
        </div>
    );
};

export default Body;
