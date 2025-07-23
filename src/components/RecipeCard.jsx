import { useNavigate } from "react-router";

const RecipeCard = (props) => {
    const { recipes } = props;

    const navigate = useNavigate();

    const handleOnClick = (id) => {
        navigate(`/recipe/${id}`);
    };

    return (
        <div className="recipe-wrapper">
            {recipes.map((recipe) => {
                const { caloriesPerServing, cuisine, id, image, name, tags } =
                    recipe;
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
                            {/* <p>{data}</p> */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RecipeCard;
