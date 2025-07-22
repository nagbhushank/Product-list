import { useNavigate } from "react-router";

const RecipeCard = (props) => {
    const { recipes, data } = props;

    const navigate = useNavigate();

    const handleOnClick = (id) => {
        console.log("CLickeddddd" + id);
        // navigate("/recipe/" + id);
        navigate(`/recipe/${id}`);
    };

    return (
        <div className="recipe-wrapper">
            {recipes.map((recipe) => {
                const {
                    caloriesPerServing,
                    cuisine,
                    id,
                    image,
                    name,
                    instructions,
                    tags,
                } = recipe;
                return (
                    <div key={id} className="recipe-card">
                        <div>
                            <img
                                src={image}
                                alt={name}
                                className="recipe-image"
                            />
                            <button
                                onClick={() => handleOnClick(id)}
                                className="seemore-btn"
                            >
                                {" "}
                                See More
                            </button>
                        </div>
                        <div>
                            <p className="recipe-name"> {name} </p>
                            <h3> {cuisine}</h3>
                            <h4>Calories Per Serving : {caloriesPerServing}</h4>
                            <h5>{tags}</h5>
                            <p>{data}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RecipeCard;

// recipes.map((recipe) => {
//     const { caloriesPerServing, cuisine, id, image, name, instructions, tags } =
//         recipe;
//     return (
//         <div key={id} className="recipe-card">
//             <div>
//                 <img src={image} alt={name} className="recipe-image" />
//                 <button className="seemore-btn"> See More</button>
//             </div>
//             <div>
//                 <p className="recipe-name"> {name} </p>
//                 <h3> {cuisine}</h3>
//                 <h4>Calories Per Serving : {caloriesPerServing}</h4>
//                 <h5>{tags}</h5>
//                 <p>{data}</p>
//             </div>
//         </div>
//     );
// });
