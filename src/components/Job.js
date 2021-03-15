function Job({ job }) {
  const { type, url, create_at, company, location, title } = job;
  return (
    <div className="job-container">
      <img src={url} alt={company} />
      <div>
        <span>{create_at}</span>
        <span>{type}</span>
      </div>
      <h2>{title}</h2>
      <p>{location}</p>
    </div>
  );
}

export default Job;
