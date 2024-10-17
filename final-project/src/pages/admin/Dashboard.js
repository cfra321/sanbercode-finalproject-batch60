// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Tabel from '../../components/admin/Tabel';
import LogoSlider from '../../components/Keenslide';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://final-project-api-alpha.vercel.app/api/jobs');
        setJobData(response.data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for the chart
  const chartData = {
    labels: jobData.map(job => job.title),
    datasets: [
      {
        label: 'Salary Range (in IDR)',
        data: jobData.map(job => (job.salary_min + job.salary_max) / 2), // Average salary
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Salary (IDR)',
        },
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
       <LogoSlider/>
      <h2 className="text-2xl font-bold  text-gray-800 text-center">Welcome to the Dashboard</h2>
      <div className="mt-8 bg-white shadow-lg text-center rounded-lg p-4">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Salary Range Visualization</h3>
        <div className="w-1/2 mx-auto "> {/* Set width to 1/2 of the parent container */}
          {jobData.length > 0 ? (
            <Bar data={chartData} options={options} />
          ) : (
            <p className="text-gray-500 text-center">Loading salary data...</p>
          )}
        </div>
      </div>
      <Tabel/>
    </div>
  );
};

export default Dashboard;
