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
        <NavLink
            key={id}
            to={`/recipe/${id}`}
            className="w-[25rem] decoration-none transition-[bg-[#c9d1e6]] hover:bg-[#c9d1e6] hover:rounded-[20px]"
        >
            <div className="p-[1rem]">
                <img
                    src={image}
                    alt={name}
                    className="w-[100%] h-[200px] object-cover rounded-[25px]"
                />
            </div>
            <div className="p-[1rem]">
                <h3 className="text-[1.5rem] text-[#333] font-bold">{name}</h3>
                <h4 className="text-[1.5rem] text-[#515050]">
                    <IoFastFoodOutline /> : &nbsp;{cuisine}
                </h4>
                <h6 className="text-[0.95rem] mb-[0.2rem] text-[#515050]">
                    <AiOutlineTags /> : &nbsp;
                    {tags.map((id, tag) => {
                        return <span key={tag}>{id}, &nbsp;</span>;
                    })}
                </h6>
                <h5 className="text-[0.95rem] mb-[0.2rem] text-[#515050]">
                    <LuHeartPulse /> &nbsp;: {caloriesPerServing}
                </h5>
            </div>
        </NavLink>
    );
};

export default RecipeCard;
