import ReactMarkdown from "react-markdown";
import { formatDistanceStrict } from "date-fns";

function JobDetails({ theme, job }) {
  const {
    company,
    company_logo,
    created_at,
    description,
    how_to_apply,
    location,
    title,
    type,
    company_url,
  } = job;

  const timeFromNow = formatDistanceStrict(new Date(created_at), new Date(), {
    addSuffix: true,
  });
  return (
    <>
      <div className="container">
        <div className="job-details">
          <div className={`company-info bg-${theme}`}>
            <div className="logo-container">
              <img src={company_logo} alt={company} />
            </div>
            <div className="name-link">
              <div>
                <h3>{company}</h3>
                <p>{company_url}</p>
              </div>
              <a
                href={company_url}
                disabled={!company_url}
                className="btn-link btn-washed"
              >
                Company Site
              </a>
            </div>
          </div>
          <div className={`job bg-${theme}`}>
            <div className="job-summary">
              <div>
                <div className="time-type-container text-gray mb-md">
                  <p>{timeFromNow}</p>
                  <span className="dot-divider"></span>
                  <p>{type}</p>
                </div>
                <h2>{title}</h2>
                <p className="text-violet">{location}</p>
              </div>
              <a href="#apply" className="btn btn-violet btn-link">
                Apply now
              </a>
            </div>
            <div className="job-description">
              <ReactMarkdown children={description} />
            </div>
          </div>
          <div className="how-to-apply" id="apply">
            <h3>How to Apply</h3>
            <ReactMarkdown children={how_to_apply} className="apply-details" />
          </div>
        </div>
      </div>
      <footer className={`footer bg-${theme}`}>
        <div className="container">
          <div className="name-link">
            <div>
              <h3>{company}</h3>
              <p>{company_url}</p>
            </div>
            <a href={company_url} className="btn btn-link btn-violet">
              Company Site
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default JobDetails;
