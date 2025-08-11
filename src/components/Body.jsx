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

    if (!data) return <Shimmer />;

    const LabelRecipeCard = RecipeCardHOC(RecipeCard);

    return (
        <div className="flex flex-wrap">
            {allRecipes.map((recipe) => {
                return (
                    <div
                        className="relative flex w-[18rem] m-[0.8%] rounded-[20px] shadow-[10px_4px_8px_#0000004d] "
                        key={recipe.id}
                    >
                        {recipe.caloriesPerServing < 300 ? (
                            <LabelRecipeCard recipe={recipe} key={recipe.id} />
                        ) : (
                            <RecipeCard recipe={recipe} key={recipe.id} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Body;
