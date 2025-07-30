// import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const RecipeCard = (props) => {
    const { recipe } = props;

    // const navigate = useNavigate();
    // const handleOnClick = (id) => {
    //     navigate(`/recipe/${id}`);
    // };
    const { caloriesPerServing, cuisine, id, image, name, tags } = recipe;
    return (
        <NavLink key={id} to={`/recipe/${id}`} className="recipe-card nav-link">
            <div>
                <img src={image} alt={name} className="recipe-image" />
            </div>
            <div>
                <h2 className="recipe-name"> {name} </h2>
                <h3> {cuisine}</h3>
                <h4>Calories : {caloriesPerServing}</h4>
                <h5>{tags}</h5>
            </div>
        </NavLink>
    );
};

export default RecipeCard;
