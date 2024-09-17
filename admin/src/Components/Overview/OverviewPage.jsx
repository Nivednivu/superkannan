import React, { useState, useEffect } from 'react';
import { ServerURL } from '../serverURL';
import './OverviewPage.css'; // Import the CSS file

const OverviewPage = () => {
  const [grievances, setGrievances] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch grievances when the component mounts
    const fetchGrievances = async () => {
      try {
        const response = await fetch(`${ServerURL}/grievances/grievances`); // Adjust the endpoint as needed
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setGrievances(data.grievances);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchGrievances();
  }, []);

  return (
    <div className="container">
      <h1 className="header">Grievances Overview</h1>
      {error && <p className="error">Error: {error}</p>}
      {grievances.length > 0 ? (
        <table className="grievance-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {grievances.map(grievance => (
              <tr key={grievance._id}>
                <td>{grievance.name}</td>
                <td>{grievance.description}</td>
                <td>{grievance.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-grievances">No grievances found</p>
      )}
    </div>
  );
};

export default OverviewPage;
