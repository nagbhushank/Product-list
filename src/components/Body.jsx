import { useState, useEffect } from "react";

const Body = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const data = await fetch("https://dummyjson.com/recipes");
        const response = await data.json();
        console.log(response.recipes);
        setRecipes(response.recipes);
    };

    return (
        <div className="body">
            {recipes.map((recipe) => {
                const {
                    caloriesPerServing,
                    cuisine,
                    id,
                    image,
                    name,
                    instructions,
                    tags,
                } = recipe;
                return (
                    <div key={id} className="recipe-card">
                        <div>
                            <img
                                src={image}
                                alt={name}
                                className="recipe-image"
                            />
                            <button className="seemore-btn"> See More</button>
                        </div>
                        <div>
                            <p className="recipe-name"> {name} </p>
                            <h3> {cuisine}</h3>
                            <h4>Calories Per Serving : {caloriesPerServing}</h4>
                            <h5>{tags}</h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Body;
