import { Link } from "react-router-dom";

function Job({ job, theme }) {
  const { type, url, create_at, company, location, title } = job;
  return (
    <div className={`job-container bg-${theme}`}>
      <div className="company-logo-container">
        <img src={url} alt={company} className="company-logo" />
      </div>
      <div className="time-type-container text-gray mb-md">
        <p>{create_at}</p>
        <span className="dot-divider"></span>
        <p>{type}</p>
      </div>
      <Link to="/job-details">
        <h2>{title}</h2>
      </Link>
      <p className="text-gray mb-lg">{company}</p>
      <p className="text-violet">{location}</p>
    </div>
  );
}

export default Job;
