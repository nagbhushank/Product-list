const RecipeCardHOC = (WrappedComponent) => {
    return function EnhancedComponent(props) {
        return (
            <>
                <span className="calories-label">Low Calories</span>
                <WrappedComponent {...props} />
            </>
        );
    };
};

export default RecipeCardHOC;
