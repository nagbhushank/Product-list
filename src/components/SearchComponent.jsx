const SearchComponent = () => {
    return (
        <div>
            <label htmlFor="cntry">Country</label>
            <select
                name="country"
                id="cntry"
                onChange={(e) => {
                    console.log("Country", e.target.value);
                }}
            >
                <option value="ind">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="uae">UAE</option>
            </select>
            <div>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    onChange={(e) => {
                        console.log("Gender : ", e.target.value);
                    }}
                />
                <label htmlFor="male">Male</label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    onChange={(e) => {
                        console.log("Gender : ", e.target.value);
                    }}
                />
                <label htmlFor="female">Female</label>
            </div>
        </div>
    );
};

export default SearchComponent;
