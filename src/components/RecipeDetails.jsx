import { AiOutlineTags } from "react-icons/ai";
import { SiLevelsdotfyi } from "react-icons/si";
import { FcRatings } from "react-icons/fc";
import { RxLapTimer } from "react-icons/rx";
import { IoFastFoodOutline } from "react-icons/io5";
import { useParams } from "react-router";
import useRecipeDetails from "../utils/useRecipeDetails";

import Shimmer from "./Shimmer";

const RecipeDetails = (props) => {
    const { id } = useParams();

    const recipeDetails = useRecipeDetails(id);
    console.log(recipeDetails);
    if (recipeDetails.length === 0) <Shimmer />;

    return (
        <div className="recipe-details-card">
            <div>
                <img
                    src={recipeDetails.image}
                    alt={recipeDetails.name}
                    className="recipe-details-image"
                />
                <>
                    <h3>Instructions :</h3>
                    {recipeDetails.instructions?.length > 0 ? (
                        recipeDetails.instructions.map((step, index) => (
                            <div key={index}>
                                {index + 1}. {step}
                            </div>
                        ))
                    ) : (
                        <p>No instructions available.</p>
                    )}
                </>
            </div>
            <div>
                <h2> {recipeDetails.name}</h2>
                <h3>Calories : {recipeDetails.caloriesPerServing}</h3>
                <h3>
                    <RxLapTimer /> : {recipeDetails.cookTimeMinutes} Minutes
                </h3>
                <h3>
                    <IoFastFoodOutline />: {recipeDetails.cuisine}
                </h3>
                <h3>
                    <SiLevelsdotfyi />:{recipeDetails.difficulty}
                </h3>
                <h3>
                    <AiOutlineTags /> :{" "}
                    {recipeDetails.tags?.length > 0 ? (
                        recipeDetails.tags.map((step, index) => (
                            <span key={index}>{step}, </span>
                        ))
                    ) : (
                        <p>No TAGS.</p>
                    )}
                </h3>
                <h3>
                    <FcRatings />: {recipeDetails.rating}
                </h3>
                <div>
                    <h3>Instructions :</h3>
                    {recipeDetails.ingredients?.length > 0 ? (
                        recipeDetails.ingredients.map((step, index) => (
                            <div key={index}>
                                {index + 1}. {step}
                            </div>
                        ))
                    ) : (
                        <p>No instructions available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default RecipeDetails;
