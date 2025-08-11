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
        // <div className="recipe-details-card">
        <div className="flex flex-wrap gap-8 p-8 rounded-[12px] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] max-w-[1200px] my-8 mx-auto box-border">
            <div className="flex-[1_1_350px] flex flex-col gap-4">
                <img
                    src={recipeDetails.image}
                    alt={recipeDetails.name}
                    className="w-full h-auto rounded-[8px] object-cover"
                />
                <>
                    <h3 className="mt-[1rem] text-[1.2rem] text-[#333]">
                        Instructions :
                    </h3>
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
            <div className="flex-[2_1_500px] flex flex-col gap-[0.5rem]">
                <h2 className="text-[2rem] mb-[0.5rem] text-[#2b2b2b]">
                    {" "}
                    {recipeDetails.name}
                </h2>
                <h3 className="text-[1.2rem] text-[#444] m-[0.2_0rem] flex items-center gap-[0.5rem]">
                    Calories : {recipeDetails.caloriesPerServing}
                </h3>
                <h3>
                    <RxLapTimer /> : {recipeDetails.cookTimeMinutes} Minutes
                </h3>
                <h3 className="text-[1.2rem] text-[#444] m-[0.2_0rem] flex items-center gap-[0.5rem]">
                    <IoFastFoodOutline />: {recipeDetails.cuisine}
                </h3>
                <h3 className="text-[1.2rem] text-[#444] m-[0.2_0rem] flex items-center gap-[0.5rem]">
                    <SiLevelsdotfyi />:{recipeDetails.difficulty}
                </h3>
                <h3 className="text-[1.2rem] text-[#444] m-[0.2_0rem] flex items-center gap-[0.5rem]">
                    <AiOutlineTags /> :{" "}
                    {recipeDetails.tags?.length > 0 ? (
                        recipeDetails.tags.map((step, index) => (
                            <span key={index}>{step}, </span>
                        ))
                    ) : (
                        <p>No TAGS.</p>
                    )}
                </h3>
                <h3 className="text-[1.2rem] text-[#444] m-[0.2_0rem] flex items-center gap-[0.5rem]">
                    <FcRatings />: {recipeDetails.rating}
                </h3>
                <div>
                    <h3 className="text-[1.2rem] text-[#444] m-[0.2_0rem] flex items-center gap-[0.5rem]">
                        Ingredients :
                    </h3>
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
