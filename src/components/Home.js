import Search from "./Search";
import Jobs from "./Jobs";

function Home({ theme, jobs, jobHandler, handlePageNumber }) {
  return (
    <>
      <div className="container">
        <Search theme={theme} />
        <div className="jobs">
          <Jobs jobs={jobs} theme={theme} jobHandler={jobHandler} />
          <button className="btn btn-violet btn-lg" onClick={handlePageNumber}>
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
