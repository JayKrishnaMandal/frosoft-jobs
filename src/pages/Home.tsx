import { Link } from "react-router-dom";
import { Job } from "../assets/jobsData";

interface Props {
  jobs: Job[];
}

const Home = ({ jobs }: Props) => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Job Portal</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Company</th>
            <th scope="col">Location</th>
            <th scope="col">Salary</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <th scope="row">{job.id}</th>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>
                <Link to={`/job/${job.id}`} className="btn btn-primary">
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
