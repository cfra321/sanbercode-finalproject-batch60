import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"; // pastikan untuk menginstal ini dengan `npm install js-cookie`

const JobForm = () => {
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 1,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const token = Cookies.get('token'); // ambil token dari cookies

    if (!token) {
      console.error("Token tidak ditemukan di cookies");
      return;
    }

    try {
      await axios.post(
        "https://final-project-api-alpha.vercel.app/api/jobs",
        input,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data berhasil dikirim!");
    } catch (error) {
      console.error("Gagal mengirim data:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Form Job Vacancy</h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Form Inputs */}
            <input
              name="title"
              value={input.title}
              onChange={handleInput}
              placeholder="Job Title"
              className="p-2 border rounded"
              required
            />
            <input
              name="job_description"
              value={input.job_description}
              onChange={handleInput}
              placeholder="Job Description"
              className="p-2 border rounded"
              required
            />
            <input
              name="job_qualification"
              value={input.job_qualification}
              onChange={handleInput}
              placeholder="Job Qualification"
              className="p-2 border rounded"
              required
            />
            <input
              name="job_type"
              value={input.job_type}
              onChange={handleInput}
              placeholder="Job Type (e.g., Remote)"
              className="p-2 border rounded"
              required
            />
            <input
              name="job_tenure"
              value={input.job_tenure}
              onChange={handleInput}
              placeholder="Job Tenure (e.g., Full-time)"
              className="p-2 border rounded"
              required
            />
            <input
              name="company_name"
              value={input.company_name}
              onChange={handleInput}
              placeholder="Company Name"
              className="p-2 border rounded"
              required
            />
            <input
              name="company_image_url"
              value={input.company_image_url}
              onChange={handleInput}
              placeholder="Company Image URL"
              className="p-2 border rounded"
              required
            />
            <input
              name="company_city"
              value={input.company_city}
              onChange={handleInput}
              placeholder="Company City"
              className="p-2 border rounded"
              required
            />
            <input
              name="salary_min"
              type="number"
              value={input.salary_min}
              onChange={handleInput}
              placeholder="Minimum Salary"
              className="p-2 border rounded"
              required
            />
            <input
              name="salary_max"
              type="number"
              value={input.salary_max}
              onChange={handleInput}
              placeholder="Maximum Salary"
              className="p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-5 mb-16 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
