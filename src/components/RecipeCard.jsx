// import { useNavigate } from "react-router";
import { AiOutlineTags } from "react-icons/ai";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuHeartPulse } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { LuUserRound } from "react-icons/lu";
import { useUserName } from "../context/LoginUserContext";

const RecipeCard = (props) => {
    const { recipe } = props;

    const { username, updateUserName } = useUserName();

    // updateUserName("Abhishek");
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
            <div className="p-[1.5rem]">
                <h3 className="text-[1.5rem] text-[#333] font-bold">{name}</h3>
                <div className="flex">
                    <IoFastFoodOutline className="text-[1rem]" />
                    <h4 className="text-[#515050]">: &nbsp;{cuisine}</h4>
                </div>

                <div className="flex">
                    <AiOutlineTags className="text-[1.5rem]" />
                    <h6 className="text-[0.95rem] mb-[0.2rem] text-[#515050]">
                        : &nbsp;
                        {tags.map((id, tag) => {
                            return <span key={tag}>{id}, &nbsp;</span>;
                        })}
                    </h6>
                </div>

                <div className="flex">
                    <LuHeartPulse className="text-[1.5rem]" />
                    <h5 className="text-[0.95rem] mb-[0.2rem] text-[#515050]">
                        &nbsp;: {caloriesPerServing} <br />
                    </h5>
                </div>
                <div className="flex">
                    <LuUserRound className="text-[1.5rem]" />
                    <h5 className="text-[0.95rem] mb-[0.2rem] text-[#515050]">
                        {username}
                    </h5>
                </div>
            </div>
        </NavLink>
    );
};

export default RecipeCard;
