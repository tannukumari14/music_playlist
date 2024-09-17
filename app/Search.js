import './Search.css';

const Search = () => {
    return(
        <>
            <div className='Search-container'>
                <button className="search-button">
                    Search
                    <img className="search-image" src='search.png'></img>
                </button>
            </div>
        </>
    )
}

export default Search;