import { Link } from "react-router-dom";

import brokenImage from "../assets/broken-image.png";

function Job({ job, theme, jobHandler }) {
  const {
    contract,
    logo,
    logoBackground,
    postedAt,
    company,
    location,
    position,
  } = job;
  function handleJob() {
    jobHandler(job);
  }

  return (
    <Link to="/job-details">
      <div className={`job-container bg-${theme}`} onClick={handleJob}>
        <div
          className="company-logo-container"
          style={{ backgroundColor: logoBackground }}
        >
          <img src={logo} alt={company} className="company-logo" />
        </div>
        <div className="time-type-container text-gray mb-md">
          <p>{postedAt}</p>
          <span className="dot-divider"></span>
          <p>{contract}</p>
        </div>
        <h2>{position}</h2>
        <p className="text-gray mb-lg">{company}</p>
        <p className="text-violet">{location}</p>
      </div>
    </Link>
  );
}

export default Job;
