import { useState, useEffect } from "react";

const RecipeDetails = (props) => {
    const [recipeDetails, setRecipeDetails] = useState({});

    useEffect(() => {
        const { number } = props;
        console.log(number);
        getRecipeDetails(number);
    }, []);

    const getRecipeDetails = async () => {
        const response = await fetch(`https://dummyjson.com/recipes/1`);
        const getData = await response.json();
        console.log(getData);
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
