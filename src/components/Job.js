function Job({ job, theme }) {
  const { type, url, create_at, company, location, title } = job;
  const darkTheme = theme === "dark" ? "dark-blue" : "";
  const containerClassName = `job-container ${darkTheme}`;
  const whiteColor = theme === "dark" ? "white" : "";
  return (
    <div className={containerClassName}>
      <div className="company-logo-container">
        <img src={url} alt={company} className="company-logo" />
      </div>
      <div className="time-type-container text-gray mb-md">
        <p>{create_at}</p>
        <span className="dot-divider"></span>
        <p>{type}</p>
      </div>
      <h2 className={whiteColor}>{title}</h2>
      <p className="text-gray mb-lg">{company}</p>
      <p className="text-violet">{location}</p>
    </div>
  );
}

export default Job;
