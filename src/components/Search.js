import iconSearch from "../assets/desktop/icon-search.svg";
import iconLocation from "../assets/desktop/icon-location.svg";
import iconFilter from "../assets/mobile/icon-filter.svg";

function Search() {
  const titleSearchPlaceholder = "Filter by title, companies, experties...";
  return (
    <div className="container">
      <form className="search">
        <div className="title-input-container">
          <img src={iconSearch} className="search-icon" />
          <input
            type="text"
            className="title-input"
            placeholder={titleSearchPlaceholder}
          />
          <img src={iconFilter} className="filter-icon" />
        </div>

        <div className="location-input-container">
          <img src={iconLocation} className="location-icon" />
          <input
            type="text"
            className="location-input"
            placeholder="Filter by location..."
          />
        </div>

        <div className="action-container">
          <div className="checkbox-container">
            <input type="checkbox" id="full-time-only" className="checkbox" />
            <label htmlFor="full-time-only">Full Time Only</label>
          </div>
          <button type="submit" className="btn btn-violet">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
