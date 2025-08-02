import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Shimmer from "./Shimmer";
import RecipeCardHOC from "./RecipeCardHOC";

import { GET_ALL_RECIPE_DATA } from "../utils/Constants";

const Body = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        setLoading(true);
        const data = await fetch(GET_ALL_RECIPE_DATA);
        const response = await data.json();
        setRecipes(response.recipes);
        setLoading(false);
    };

    const LabelRecipeCard = RecipeCardHOC(RecipeCard);

    console.log("render");
    return (
        <div className="body">
            {loading ? (
                <Shimmer />
            ) : (
                <div className="recipe-wrapper">
                    {recipes.map((recipe) => {
                        console.log(recipe);
                        return (
                            <div className="recipe-card" key={recipe.id}>
                                {recipe.caloriesPerServing < 200 ? (
                                    <LabelRecipeCard
                                        recipe={recipe}
                                        key={recipe.id}
                                    />
                                ) : (
                                    <RecipeCard
                                        recipe={recipe}
                                        key={recipe.id}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Body;
