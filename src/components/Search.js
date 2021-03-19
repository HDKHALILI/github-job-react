import iconSearch from "../assets/desktop/icon-search.svg";
import iconLocation from "../assets/desktop/icon-location.svg";
import iconFilter from "../assets/mobile/icon-filter.svg";

function Search({ theme }) {
  const titleSearchPlaceholder = "Filter by title, companies, experties...";
  return (
    <form className={`search bg-${theme}`}>
      <div className="title-input-container">
        <img src={iconSearch} className="search-icon" alt="search" />
        <input
          type="text"
          className="title-input"
          placeholder={titleSearchPlaceholder}
        />
        <img src={iconFilter} className="filter-icon" alt="filter" />
      </div>

      <div className="location-input-container">
        <img src={iconLocation} className="location-icon" alt="location" />
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
  );
}

export default Search;
