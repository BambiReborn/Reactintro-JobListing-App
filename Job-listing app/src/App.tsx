import { useState } from "react";
import "./App.css";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  details: string;
};

const jobs: Job[] = [
  { id: 1, title: "Financial Analyst", company: "Sterling Bank", location: "Lagos", salary: "₦350,000", details: "Analyze financial data and prepare reports to guide business decisions." },
  { id: 2, title: "Accountant", company: "Zenith Finance", location: "Abuja", salary: "₦280,000", details: "Manage company accounts, prepare balance sheets and track expenses." },
  { id: 3, title: "Investment Banker", company: "First Capital", location: "Lagos", salary: "₦600,000", details: "Advise clients on investments, mergers, and raising capital." },
  { id: 4, title: "Loan Officer", company: "Access Bank", location: "Port Harcourt", salary: "₦230,000", details: "Review and process loan applications for individuals and businesses." },
  { id: 5, title: "Tax Consultant", company: "KPMG Nigeria", location: "Lagos", salary: "₦400,000", details: "Help clients file taxes correctly and reduce their tax liabilities." },
  { id: 6, title: "Auditor", company: "Deloitte Nigeria", location: "Abuja", salary: "₦370,000", details: "Examine financial records to ensure accuracy and legal compliance." },
  { id: 7, title: "Budget Analyst", company: "GTBank", location: "Lagos", salary: "₦300,000", details: "Plan and monitor company budgets to control spending and meet targets." },
  { id: 8, title: "Risk Manager", company: "UBA Group", location: "Remote", salary: "₦450,000", details: "Identify financial risks and develop strategies to reduce their impact." },
  { id: 9, title: "Insurance Broker", company: "AXA Mansard", location: "Enugu", salary: "₦200,000", details: "Connect clients with the right insurance plans for their needs." },
  { id: 10, title: "Finance Manager", company: "Dangote Group", location: "Lagos", salary: "₦550,000", details: "Oversee the financial health of the company and manage the finance team." },
];

function JobCard({ job }: { job: Job }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>

      {showDetails && (
        <div className="details-box">
          <strong>About this role:</strong> {job.details}
        </div>
      )}

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
}

function JobList({ jobs }: { jobs: Job[] }) {
  if (jobs.length === 0) {
    return <p>No jobs available at the moment.</p>;
  }

  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Finance Job Listings</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "8px" }}>
        Find the best finance opportunities across Nigeria.
      </p>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "24px" }}>
        From banking to investment. Your next career move starts here.
      </p>
      <JobList jobs={jobs} />
    </div>
  );
}