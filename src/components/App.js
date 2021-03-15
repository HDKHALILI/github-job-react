import Header from "./Header";
import Search from "./Search";
import Jobs from "./Jobs";

const jobs = [
  {
    id: 1,
    type: "Full Time",
    url: "../assets/public-health-institute.jpg",
    create_at: "2 days ago",
    company: "Public Health Institute",
    location: "Los Angeles, San Fransico, Remote, Mountain View",
    title: "Senior Software Engineer",
  },
  {
    id: 1,
    type: "Full Time",
    url: "../assets/public-health-institute.jpg",
    create_at: "2 days ago",
    company: "Public Health Institute",
    location: "Los Angeles, San Fransico, Remote, Mountain View",
    title: "Senior Software Engineer",
  },
  {
    id: 1,
    type: "Full Time",
    url: "../assets/public-health-institute.jpg",
    create_at: "2 days ago",
    company: "Public Health Institute",
    location: "Los Angeles, San Fransico, Remote, Mountain View",
    title: "Senior Software Engineer",
  },
  {
    id: 1,
    type: "Full Time",
    url: "../assets/public-health-institute.jpg",
    create_at: "2 days ago",
    company: "Public Health Institute",
    location: "Los Angeles, San Fransico, Remote, Mountain View",
    title: "Senior Software Engineer",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <main className="container main">
        <Jobs jobs={jobs} />
      </main>
    </div>
  );
}

export default App;
