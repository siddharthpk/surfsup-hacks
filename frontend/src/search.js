const Search = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search Cryptocurrencies"
            name="s"
	className="vv"
	    
        />
        <button type="submit" className="vvv">Search</button>
    </form>
);

export default Search;