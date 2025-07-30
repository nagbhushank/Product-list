import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Shimmer from "./Shimmer";
import { GET_ALL_RECIPE_DATA } from "../utils/Constants";

const Body = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        setLoading(false);
        const data = await fetch(GET_ALL_RECIPE_DATA);
        const response = await data.json();
        setRecipes(response.recipes);
        setLoading(true);
    };

    console.log("render");
    return (
        <div className="body">
            {loading ? (
                <div className="recipe-wrapper">
                    {recipes.map((recipe) => {
                        return <RecipeCard recipe={recipe} key={recipe.id} />;
                    })}
                </div>
            ) : (
                <Shimmer />
            )}
        </div>
    );
};

export default Body;
