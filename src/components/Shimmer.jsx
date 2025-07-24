const Shimmer = ({ number = 10 }) => {
    return (
        <div className="recipe-wrapper-shimmer">
            {Array.from({ length: number }).map((_, id) => {
                return <div key={id} className="recipe-card-shimmer"></div>;
            })}
        </div>
    );
};

export default Shimmer;
