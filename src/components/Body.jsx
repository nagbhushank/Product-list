import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        setLoading(false);
        const data = await fetch("https://dummyjson.com/recipes");
        const response = await data.json();
        console.log(response.recipes);
        setRecipes(response.recipes);
        setLoading(true);
    };

    console.log("render");
    return (
        <div>
            {/* {recipes.length > 0 ? (
                <div>
                    <RecipeCard recipes={recipes} data={"OKAY"} />
                </div>
            ) : (
                <div>
                    <Shimmer />
                </div>
            )} */}

            {loading ? (
                <RecipeCard recipes={recipes} data={"OKAY"} />
            ) : (
                <Shimmer />
            )}
        </div>
    );
};

export default Body;
