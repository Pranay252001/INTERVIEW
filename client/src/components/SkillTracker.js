import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const SkillTracker = ({ userId }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get(`/api/skills/${userId}`)
      .then(res => setSkills(res.data.skills))
      .catch(err => console.error(err));
  }, [userId]);

  const data = {
    labels: skills.map(skill => skill.skill),
    datasets: [
      {
        label: 'Skill Proficiency',
        data: skills.map(skill => skill.proficiency),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Skill Tracker</h2>
      <Bar data={data} />
    </div>
  );
};

export default SkillTracker;
