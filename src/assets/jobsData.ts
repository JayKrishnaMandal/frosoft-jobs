// jobsData.ts
export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
  }
  
  const jobs: Job[] = [
    { id: 1, title: "Software Engineer", company: "ABC Tech", location: "New York", salary: "$100,000" },
    { id: 2, title: "Web Developer", company: "XYZ Solutions", location: "San Francisco", salary: "$90,000" },
    { id: 3, title: "Data Analyst", company: "Data Insights Inc.", location: "Chicago", salary: "$80,000" }
  ];
  
  export default jobs;
  