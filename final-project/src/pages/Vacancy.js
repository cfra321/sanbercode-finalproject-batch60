import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const Vacancy = () => {
  const [data, setData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState({
    title: '',
    salaryMin: '',
    salaryMax: '',
    location: '',
    jobType: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://final-project-api-alpha.vercel.app/api/jobs'); 
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleViewClick = (job) => {
    setSelectedJob(job);
  };

  const handleApplyClick = (job) => {
    if (job.job_status !== 1) {  
      Swal.fire({
        title: 'Error',
        text: 'This position is no longer available.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
  
    const token = Cookies.get('token');
    if (token) {
      Swal.fire({
        title: 'Success!',
        text: 'You have successfully applied for the job.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'You need to log in to apply.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({
      ...filter,
      [name]: value
    });
  };

  // Mendapatkan daftar lokasi unik dan jenis pekerjaan untuk dropdown
  const locations = [...new Set(data.map(job => job.company_city))];
  const jobTypes = [...new Set(data.map(job => job.job_type))];

  const filteredData = data.filter(job => {
    const matchesTitle = job.title.toLowerCase().includes(filter.title.toLowerCase());
    const matchesLocation = filter.location === '' || job.company_city === filter.location;
    const matchesSalaryMin = filter.salaryMin === '' || job.salary_min >= parseInt(filter.salaryMin);
    const matchesSalaryMax = filter.salaryMax === '' || job.salary_max <= parseInt(filter.salaryMax);
    const matchesJobType = filter.jobType === '' || job.job_type === filter.jobType;

    return matchesTitle && matchesLocation && matchesSalaryMin && matchesSalaryMax && matchesJobType;
  });

  return (
    <div className="flex flex-col bg-gray-100">
      <section style={{ minHeight: "78vh" }} className="bg-gray-200 p-5">
        <div className="container mx-auto mt-10">
          <h1 className="text-3xl font-bold text-center mb-6">Find Your Job Vacancy Here</h1>

          {/* Filter Section */}
          <div className="flex flex-wrap justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              name="title"
              value={filter.title}
              onChange={handleFilterChange}
              placeholder="Job Title"
              className="p-2 border border-gray-300 rounded-md"
            />
            <select
              name="location"
              value={filter.location}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Location</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
            <input
              type="number"
              name="salaryMin"
              value={filter.salaryMin}
              onChange={handleFilterChange}
              placeholder="Min Salary"
              className="p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="salaryMax"
              value={filter.salaryMax}
              onChange={handleFilterChange}
              placeholder="Max Salary"
              className="p-2 border border-gray-300 rounded-md"
            />
            <select
              name="jobType"
              value={filter.jobType}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Job Type</option>
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Detail Job Section */}
          {selectedJob && (
            <div className="bg-white border border-gray-300 shadow-md rounded-lg p-6 mb-10 flex flex-col items-center text-center space-y-4">
              <div className="flex justify-center mb-4">
                <img src={selectedJob.company_image_url} className="w-32 h-32 object-contain" alt={selectedJob.title} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
              <p className="text-gray-700"><strong>Company:</strong> {selectedJob.company_name}</p>
              <p className="text-gray-700"><strong>Location:</strong> {selectedJob.company_city}</p>
              <p className="text-gray-700"><strong>Type:</strong> {selectedJob.job_type}</p>
              <p className="text-gray-700"><strong>Tenure:</strong> {selectedJob.job_tenure}</p>
              <p className="text-gray-700"><strong>Status:</strong> {selectedJob.job_status === 1 ? 'Open' : 'Closed'}</p>
              <p className="text-gray-700"><strong>Salary:</strong> Rp{new Intl.NumberFormat('id-ID').format(selectedJob.salary_min)} - Rp{new Intl.NumberFormat('id-ID').format(selectedJob.salary_max)}</p>
              <p className="text-gray-700"><strong>Description:</strong> {selectedJob.job_description}</p>
            </div>
          )}

          {/* Job Listings */}
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {filteredData.map(job => (
              <div key={job._id} className="bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden p-4 flex flex-col">
                <div className="flex justify-center mb-4">
                  <img src={job.company_image_url} className="w-24 h-24 object-contain" alt={job.title} />
                </div>
                <h2 className="text-gray-900 font-bold text-xl text-center mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-1 text-center"><strong>{job.company_name}</strong> - {job.company_city}</p>
                <p className="text-gray-600 mb-1 text-center"><strong>Type:</strong> {job.job_type}</p>
                <p className="text-gray-600 mb-1 text-center"><strong>Tenure:</strong> {job.job_tenure}</p>
                <p className="text-gray-600 mb-1 text-center"><strong>Status:</strong> {job.job_status === 1 ? 'Open' : 'Closed'}</p>
                <p className="text-gray-600 mb-2 text-center"><strong>Salary:</strong> Rp{new Intl.NumberFormat('id-ID').format(job.salary_min)} - Rp{new Intl.NumberFormat('id-ID').format(job.salary_max)}</p>
                <div className="flex justify-center mt-4 space-x-2">
                  <button onClick={() => handleViewClick(job)} className="bg-gray-500 text-white py-2 px-4 rounded-full">
                    View
                  </button>
                  <button onClick={() => handleApplyClick(job)} className="bg-blue-500 text-white py-2 px-4 rounded-full">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Vacancy;
