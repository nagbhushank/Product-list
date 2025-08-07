// import { useNavigate } from "react-router";
import { AiOutlineTags } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuHeartPulse } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const RecipeCard = (props) => {
    const { recipe } = props;

    // const navigate = useNavigate();
    // const handleOnClick = (id) => {
    //     navigate(`/recipe/${id}`);
    // };
    const { caloriesPerServing, cuisine, id, image, name, tags } = recipe;
    return (
        <NavLink key={id} to={`/recipe/${id}`} className="card-link">
            <div>
                <img src={image} alt={name} className="recipe-image" />
            </div>
            <div>
                <h3> {name} </h3>
                <h4>
                    <IoFastFoodOutline /> : &nbsp;{cuisine}
                </h4>
                <h6>
                    <AiOutlineTags /> : &nbsp;
                    {tags.map((id, tag) => {
                        return <span key={tag}>{id}, &nbsp;</span>;
                    })}
                </h6>
                <h5>
                    <LuHeartPulse /> &nbsp;: {caloriesPerServing}
                </h5>
            </div>
        </NavLink>
    );
};

export default RecipeCard;
