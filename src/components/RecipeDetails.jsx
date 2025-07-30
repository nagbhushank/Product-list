import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { SEARCH_RECIPE_DETAILS_API } from "../utils/Constants";

const RecipeDetails = (props) => {
    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState({});

    useEffect(() => {
        const { number } = props;
        console.log(number);
        getRecipeDetails(number);
    }, []);

    const getRecipeDetails = async () => {
        const response = await fetch(SEARCH_RECIPE_DETAILS_API + id);
        const getData = await response.json();
        setRecipeDetails(getData);
    };

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
