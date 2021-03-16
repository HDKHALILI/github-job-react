import React from "react";
import Header from "./Header";
import Search from "./Search";
import Jobs from "./Jobs";
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

  document.body.className = theme;

  return (
    <div className="App">
      <Header setTheme={setTheme} />
      <Search theme={theme} />
      <div className="container">
        <main className="main">
          <Jobs jobs={jobs} theme={theme} />
          <button className="btn btn-violet btn-lg">Load More</button>
        </main>
      </div>
    </div>
  );
}

export default App;
