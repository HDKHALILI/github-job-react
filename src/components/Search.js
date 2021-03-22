import { useState, useEffect } from "react";
// import iconSearch from "../assets/desktop/icon-search.svg";
import iconLocation from "../assets/desktop/icon-location.svg";
import { ReactComponent as IconFilter } from "../assets/mobile/icon-filter.svg";
import { ReactComponent as IconSearch } from "../assets/desktop/icon-search.svg";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

function getTitleSearchPlaceholder(windowWidth) {
  if (windowWidth <= 768) {
    return "Filter by title...";
  }

  return "Filter by title, companies, experties...";
}

function Search({ theme }) {
  const windowWidth = useWindowWidth();
  const titleSearchPlaceholder = getTitleSearchPlaceholder(windowWidth);
  const checkboxLabel = windowWidth <= 768 ? "Full Time" : "Full Time Only";
  return (
    <form className={`search bg-${theme}`}>
      <div className="title-input-container">
        {/* <img src={iconSearch} className="search-icon" alt="search" /> */}
        <IconSearch className="search-icon" />
        <input
          type="text"
          className="title-input"
          placeholder={titleSearchPlaceholder}
        />
        <div className="btn-filter-container">
          <IconFilter className="filter-icon" />
          <button type="submit" className="icon-btn">
            <IconSearch className="btn-icon-search" />
          </button>
        </div>
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
          <label htmlFor="full-time-only">{checkboxLabel}</label>
        </div>
        <button type="submit" className="btn btn-violet">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
