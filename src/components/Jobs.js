import Job from "./Job";

function Jobs({ jobs, theme }) {
  return (
    <div className="jobs-container">
      {jobs.map(job => (
        <Job job={job} key={job.id} theme={theme} />
      ))}
    </div>
  );
}

export default Jobs;
