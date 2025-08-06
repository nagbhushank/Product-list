import RecipeCard from "./RecipeCard";
import Shimmer from "./Shimmer";
import RecipeCardHOC from "./RecipeCardHOC";
import useGetAllRecipeData from "../utils/useGetAllRecipeData";
import { useEffect, useState } from "react";

const Body = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const data = useGetAllRecipeData();

    useEffect(() => {
        if (data) setAllRecipes(data);
    }, [data]);

    console.log(data);
    if (!data) return <Shimmer />;

    const LabelRecipeCard = RecipeCardHOC(RecipeCard);

    console.log("render");
    return (
        <div className="body">
            <div className="recipe-wrapper">
                {allRecipes.map((recipe) => {
                    return (
                        <div className="recipe-card" key={recipe.id}>
                            {recipe.caloriesPerServing < 300 ? (
                                <LabelRecipeCard
                                    recipe={recipe}
                                    key={recipe.id}
                                />
                            ) : (
                                <RecipeCard recipe={recipe} key={recipe.id} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
