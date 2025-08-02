import { useParams } from "react-router";
import useRecipeDetails from "../utils/useRecipeDetails";
import Shimmer from "./Shimmer";

const RecipeDetails = (props) => {
    const { id } = useParams();

    const recipeDetails = useRecipeDetails(id);

    if (recipeDetails.length === 0) <Shimmer />;

    return (
        <div>
            <div>
                <p>Name : {recipeDetails.name}</p>
                <p>Calories : {recipeDetails.caloriesPerServing}</p>
                <p>Tiem for Cooking : {recipeDetails.cookTimeMinutes}</p>
                <p>Cuisine : {recipeDetails.cuisine}</p>
                <p>Difficulty level : {recipeDetails.difficulty}</p>
                <p>Rating : {recipeDetails.rating}</p>
            </div>
        </div>
    );
};
export default RecipeDetails;
