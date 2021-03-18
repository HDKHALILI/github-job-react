import React from "react";
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
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Header setTheme={setTheme} />
      {/* <Search theme={theme} />
      <div className="container">
        <main className="main">
          <Jobs jobs={jobs} theme={theme} />
          <button className="btn btn-violet btn-lg">Load More</button>
        </main>
      </div> */}

      <main className="main">
        {/* <Home theme={theme} jobs={jobs} /> */}
        <JobDetalis />
      </main>
    </div>
  );
}

export default App;
