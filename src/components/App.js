import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import JobDetalis from "./JobDetails";
import NotFound from "./NotFound";
import jobsList from "../data.json";

function App() {
  const [theme, setTheme] = React.useState("light");
  const [status, setStatus] = React.useState("idle");
  const [jobs, setJobs] = React.useState([]);
  // const [job, setJob] = React.useState(null);
  const [queries, setQueries] = React.useState(() => ({
    description: "",
    location: "",
    fulltime: false,
  }));
  // const [error, setError] = React.useState(null);

  function handleHome() {
    setJobs([]);
    setQueries({
      description: "",
      location: "",
      fulltime: false,
    });
  }

  function handleSubmit(data) {
    setJobs([]);
    setQueries(data);
  }

  function filterOnDescription(description) {
    return jobsList.filter(job => {
      return (
        job.company.toLowerCase().includes(description) ||
        job.position.toLowerCase().includes(description)
      );
    });
  }

  function filterOnLocation(jobs, location) {
    return jobs.filter(
      job => job.location.toLowerCase() === location.toLowerCase()
    );
  }

  function filterFulltimeOnly(jobs) {
    return jobs.filter(job => job.contract.toLowerCase() === "full time");
  }

  document.body.className = `body-bg-${theme}`;

  React.useEffect(() => {
    setJobs(jobsList);

    const { description, location, fulltime } = queries;

    if (description) {
      let filteredJobs = filterOnDescription(description);

      if (location) {
        filteredJobs = filterOnLocation(filteredJobs, location);
      }

      if (fulltime) {
        filteredJobs = filterFulltimeOnly(filteredJobs);
      }

      setJobs(filteredJobs);
    }

    if (location) {
      setJobs(filterOnLocation(jobsList, location));
    }

    if (fulltime) {
      setJobs(filterFulltimeOnly(jobsList));
    }

    document.title = "Dev Jobs";

    setStatus("pending");
    setStatus("resolved");
  }, [queries]);

  return (
    <div className="App">
      <Header setTheme={setTheme} handleHome={handleHome} />
      <main className="main">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                jobs={jobs}
                theme={theme}
                queries={queries}
                status={status}
                lastPage={true}
                // jobHandler={setJob}
                handleSubmit={handleSubmit}
              />
            )}
          />
          <Route path="/job-details/:id" exact>
            <JobDetalis theme={theme} jobs={jobs} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
