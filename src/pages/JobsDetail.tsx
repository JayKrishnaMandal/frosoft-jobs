import { Job } from "../assets/jobsData";
import { useParams } from "react-router-dom";

interface Props {
  jobs: Job[];
}

const JobsDetail = ({ jobs }: Props) => {
  const params = useParams() as { id: string };

  const job = jobs.find((job) => job.id == parseInt(params.id));

  if (!job) return <div>Job not found</div>;

  return (
    <div className="container mt-5">
      <h2>Job Details</h2>
      <ul>
        <li>Title: {job.title}</li>
        <li>Company: {job.company}</li>
        <li>Location: {job.location}</li>
        <li>Salary: {job.salary}</li>
      </ul>
    </div>
  );
};

export default JobsDetail;
