import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import LogoSlider from "../../components/Keenslide";

const ListJobVacancy = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    id: null,
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    if (fetchStatus) {
      axios
        .get("https://final-project-api-alpha.vercel.app/api/jobs")
        .then((res) => {
          setData(res.data);
          setFetchStatus(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [fetchStatus]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = [
      "title",
      "job_description",
      "job_qualification",
      "job_type",
      "job_tenure",
      "company_name",
      "company_image_url",
      "company_city",
      "salary_min",
      "salary_max",
    ];

    for (const field of requiredFields) {
      if (!input[field]) {
        console.error(`Field ${field} is required`);
        return;
      }
    }

    const payload = {
      title: input.title,
      job_description: input.job_description,
      job_qualification: input.job_qualification,
      job_type: input.job_type,
      job_tenure: input.job_tenure,
      job_status: input.job_status,
      company_name: input.company_name,
      company_image_url: input.company_image_url,
      company_city: input.company_city,
      salary_min: parseInt(input.salary_min),
      salary_max: parseInt(input.salary_max),
    };

    const token = Cookies.get("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (isEdit) {
      axios
        .put(`https://final-project-api-alpha.vercel.app/api/jobs/${input.id}`, payload, config)
        .then((res) => {
          resetForm();
          setFetchStatus(true);
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    } else {
      axios
        .post("https://final-project-api-alpha.vercel.app/api/jobs", payload, config)
        .then((res) => {
          resetForm();
          setFetchStatus(true);
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  };

  const resetForm = () => {
    setIsEdit(false);
    setInput({
      id: null,
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: "",
      salary_max: "",
    });
  };

  const handleEdit = (item) => {
    setInput({
      id: item._id,
      title: item.title,
      job_description: item.job_description,
      job_qualification: item.job_qualification,
      job_type: item.job_type,
      job_tenure: item.job_tenure,
      job_status: item.job_status,
      company_name: item.company_name,
      company_image_url: item.company_image_url,
      company_city: item.company_city,
      salary_min: item.salary_min,
      salary_max: item.salary_max,
    });
    setIsEdit(true);
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this job?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = Cookies.get("token");
        axios
          .delete(`https://final-project-api-alpha.vercel.app/api/jobs/${_id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setFetchStatus(true);
            Swal.fire("Deleted!", "Job has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting data:", error);
            Swal.fire("Error", "Failed to delete the job.", "error");
          });
      }
    });
  };
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
    <div className="container mx-auto my-8 ">
      <LogoSlider/>
      <h1 className="text-2xl font-bold mb-4">Manage Job Vacancies</h1>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs bg-green-700 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Description</th>
                <th scope="col" className="px-6 py-3">Qualification</th>
                <th scope="col" className="px-6 py-3">Type</th>
                <th scope="col" className="px-6 py-3">Tenure</th>
                <th scope="col" className="px-6 py-3">Company</th>
                <th scope="col" className="px-6 py-3">Image</th> 
                <th scope="col" className="px-6 py-3">City</th>
                <th scope="col" className="px-6 py-3">Salary</th>
                <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
        </thead>
          <tbody>
            {Array.isArray(currentItems) && currentItems.length === 0 ? (
              <tr>
                <td colSpan="9" className="px-6 py-4 text-center">
                  No data available
                </td>
              </tr>
            ) : (
              currentItems.map((item) => (
                <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.title}
                  </td>
                  <td className="px-6 py-4">{item.job_description}</td>
                  <td className="px-6 py-4">{item.job_qualification}</td>
                  <td className="px-6 py-4">{item.job_type}</td>
                  <td className="px-6 py-4">{item.job_tenure}</td>
                  <td className="px-6 py-4">{item.company_name}</td>
                  <td className="px-6 py-4">
                    <img src={item.company_image_url} alt={`${item.company_name} logo`} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4">{item.company_city}</td>
                  <td className="px-6 py-4">
                    {`Rp${item.salary_min} - Rp${item.salary_max}`}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4 mb-6">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-gray-300 p-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-gray-300 p-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <form onSubmit={handleSubmit} className="mb-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <input
  type="text"
  name="title"
  value={input.title}
  onChange={handleInput}
  placeholder="Job Title"
  required
  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

    <input
      type="text"
      name="job_description"
      value={input.job_description}
      onChange={handleInput}
      placeholder="Job Description"
      required
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      name="job_qualification"
      value={input.job_qualification}
      onChange={handleInput}
      placeholder="Job Qualification"
      required
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      name="job_type"
      value={input.job_type}
      onChange={handleInput}
      placeholder="Job Type"
      required
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      name="job_tenure"
      value={input.job_tenure}
      onChange={handleInput}
      placeholder="Job Tenure"
      required
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      name="job_status"
      value={input.job_status}
      onChange={handleInput}
      placeholder="Job Status"
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      name="company_name"
      value={input.company_name}
      onChange={handleInput}
      placeholder="Company Name"
      required
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      name="company_image_url"
      value={input.company_image_url}
      onChange={handleInput}
      placeholder="Company Image URL"
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      name="company_city"
      value={input.company_city}
      onChange={handleInput}
      placeholder="Company City"
      required
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="number"
      name="salary_min"
      value={input.salary_min}
      onChange={handleInput}
      placeholder="Salary Min"
      required
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="number"
      name="salary_max"
      value={input.salary_max}
      onChange={handleInput}
      placeholder="Salary Max"
      required
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <button
    type="submit"
    className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {isEdit ? "Update" : "Create"}
  </button>
</form>
    </div>
    </div>
  );
};

export default ListJobVacancy;
