import React from "react";
import { v4 as uuidv4 } from "uuid";

function isUrl(url) {
  const regexp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

  return regexp.test(url);
}

function JobDetails({ theme, job }) {
  if (!job) {
    return (
      <p className="no-job">
        No job is selected. Please select a job from home page
      </p>
    );
  }

  let {
    company,
    logo,
    logoBackground,
    postedAt,
    description,
    apply,
    location,
    position,
    contract,
    website,
    requirements,
    role,
  } = job;

  website = isUrl(website) ? website : "";

  return (
    <>
      <div className="container">
        <div className="job-details">
          <div className={`company-info bg-${theme}`}>
            <div
              className="logo-container"
              style={{ backgroundColor: logoBackground }}
            >
              <img src={logo} alt={company} className="company-logo" />
            </div>
            <div className="name-link">
              <div>
                <h3>{company}</h3>
                <p>{website}</p>
              </div>
              {website && (
                <a
                  href={website}
                  className="btn-link btn-washed"
                  target="_blank"
                  rel="noreferrer"
                >
                  Company Site
                </a>
              )}
            </div>
          </div>
          <div className={`job bg-${theme}`}>
            <div className="job-summary">
              <div>
                <div className="time-type-container text-gray mb-md">
                  <p>{postedAt}</p>
                  <span className="dot-divider"></span>
                  <p>{contract}</p>
                </div>
                <h2>{position}</h2>
                <p className="text-violet">{location}</p>
              </div>
              <a href={apply} className="btn btn-violet btn-link">
                Apply now
              </a>
            </div>
            <div className="job-description">
              <p>{description}</p>

              <h2>Requirements</h2>
              <p>{requirements.content}</p>
              <ul>
                {requirements.items.map(item => (
                  <li key={uuidv4()}>{item}</li>
                ))}
              </ul>

              <h2>Role</h2>
              <p>{role.content}</p>
              <ol>
                {role.items.map(item => (
                  <li key={uuidv4()}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <footer className={`footer bg-${theme}`}>
        <div className="container">
          <div className="name-link">
            <div>
              <h3>{company}</h3>
              <p>{website}</p>
            </div>
            <a href={apply} className="btn btn-violet btn-link">
              Apply Now
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default JobDetails;
