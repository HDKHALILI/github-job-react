import { Link } from "react-router-dom";

import brokenImage from "../assets/broken-image.png";

function Job({ job, theme, jobHandler }) {
  const { type, company_logo, postedAt, company, location, position } = job;
  function handleJob() {
    jobHandler(job);
  }

  return (
    <div className={`job-container bg-${theme}`}>
      <div className="company-logo-container">
        {company_logo ? (
          <img src={company_logo} alt={company} className="company-logo" />
        ) : (
          <img src={brokenImage} alt="question mark" className="company-logo" />
        )}
      </div>
      <div className="time-type-container text-gray mb-md">
        <p>{postedAt}</p>
        <span className="dot-divider"></span>
        <p>{type}</p>
      </div>
      <Link to="/job-details">
        <h2 onClick={handleJob}>{position}</h2>
      </Link>
      <p className="text-gray mb-lg">{company}</p>
      <p className="text-violet">{location}</p>
    </div>
  );
}

export default Job;
