import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApplicationTracker = () => {
  const [applications, setApplications] = useState([]);
  const [newApplication, setNewApplication] = useState({ title: '', company: '', deadline: '' });

  useEffect(() => {
    axios.get('/api/applications')
      .then(res => setApplications(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = () => {
    axios.post('/api/applications', newApplication)
      .then(res => setApplications([...applications, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Application Tracker</h2>
      <ul>
        {applications.map(app => (
          <li key={app._id}>
            {app.title} at {app.company} - {app.status}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Job Title"
        value={newApplication.title}
        onChange={(e) => setNewApplication({ ...newApplication, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Company"
        value={newApplication.company}
        onChange={(e) => setNewApplication({ ...newApplication, company: e.target.value })}
      />
      <input
        type="date"
        value={newApplication.deadline}
        onChange={(e) => setNewApplication({ ...newApplication, deadline: e.target.value })}
      />
      <button onClick={handleAdd}>Add Application</button>
    </div>
  );
};

export default ApplicationTracker;
