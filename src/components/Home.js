import Search from "./Search";
import Jobs from "./Jobs";

function Home({ theme, jobs }) {
  return (
    <>
      <div className="container">
        <Search theme={theme} />
        <div className="jobs">
          <Jobs jobs={jobs} theme={theme} />
          <button className="btn btn-violet btn-lg">Load More</button>
        </div>
      </div>
    </>
  );
}

export default Home;
