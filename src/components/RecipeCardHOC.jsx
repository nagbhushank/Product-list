import { MdOutlineRecommend } from "react-icons/md";
const RecipeCardHOC = (WrappedComponent) => {
    return function EnhancedComponent(props) {
        return (
            <>
                <span className="absolute w-[20px] right-[0] top-[0] z-[5] bg-[#60e63e] text-[white] rounded-t-lg rounded-r-lg ">
                    <MdOutlineRecommend />
                </span>
                <WrappedComponent {...props} />
            </>
        );
    };
};

export default RecipeCardHOC;
