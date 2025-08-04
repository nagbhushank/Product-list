import { MdOutlineRecommend } from "react-icons/md";
const RecipeCardHOC = (WrappedComponent) => {
    return function EnhancedComponent(props) {
        return (
            <>
                <span className="calories-label">
                    <MdOutlineRecommend />
                </span>
                <WrappedComponent {...props} />
            </>
        );
    };
};

export default RecipeCardHOC;
