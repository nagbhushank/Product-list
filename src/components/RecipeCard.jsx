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
        <NavLink key={id} to={`/recipe/${id}`} className="nav-link">
            <div>
                <img src={image} alt={name} className="recipe-image" />
            </div>
            <div>
                <h3> {name} </h3>
                <h4> {cuisine}</h4>
                <h5>Calories : {caloriesPerServing}</h5>
                <h6>Tag : {tags}</h6>
            </div>
        </NavLink>
    );
};

export default RecipeCard;
