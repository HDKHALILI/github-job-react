import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import JobDetalis from "./JobDetails";
import companyLogo from "../assets/public-health-institute.jpg";

const jobs = [
  {
    id: 1,
    type: "Full Time",
    url: companyLogo,
    create_at: "2d ago",
    company: "Public Health Institute",
    location: "Los Angeles, San Fransico, Remote, Mountain View",
    title: "Senior Software Engineer",
  },
  {
    id: 1,
    type: "Full Time",
    url: companyLogo,
    create_at: "2d ago",
    company: "Public Health Institute",
    location: "Los Angeles, San Fransico, Remote, Mountain View",
    title: "Senior Software Engineer",
  },
  {
    id: 1,
    type: "Full Time",
    url: companyLogo,
    create_at: "2d ago",
    company: "Public Health Institute",
    location: "Los Angeles, San Fransico, Remote, Mountain View",
    title: "Senior Software Engineer",
  },
  {
    id: 1,
    type: "Full Time",
    url: companyLogo,
    create_at: "2d ago",
    company: "Public Health Institute",
    location: "Los Angeles, San Fransico, Remote, Mountain View",
    title: "Senior Software Engineer",
  },
];

function App() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.title = "Github Jobs";
    document.body.className = `body-bg-${theme}`;
  }, [theme]);

  return (
    <div className="App">
      <Header setTheme={setTheme} />
      <main className="main">
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} jobs={jobs} theme={theme} />}
          />
          <Route
            path="/job-details"
            exact
            render={() => <JobDetalis theme={theme} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
