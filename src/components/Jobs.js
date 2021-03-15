import Job from "./Job";

function Jobs({ jobs }) {
  return (
    <div>
      {jobs.map(job => (
        <Job job={job} key={job.id} />
      ))}
    </div>
  );
}

export default Jobs;
