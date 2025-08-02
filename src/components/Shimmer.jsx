const Shimmer = ({ number = 10 }) => {
    console.log("Shimmerrr");
    return (
        <div className="recipes-wrapper-shimmer">
            {Array.from({ length: number }).map((_, id) => {
                return <div key={id} className="recipe-card-shimmer"></div>;
            })}
        </div>
    );
};

export default Shimmer;
