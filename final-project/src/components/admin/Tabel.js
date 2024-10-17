import React, { useEffect, useState } from "react";
import axios from "axios";

const Tabel = () => {
  const [data, setData] = useState([]);
 
  const [fetchStatus, setFetchStatus] = useState(true);

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


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Manage Job Vacancies</h1>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs bg-green-700 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Qualification
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Tenure
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
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
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.title}
                  </td>
                  <td className="px-6 py-4">{item.job_description}</td>
                  <td className="px-6 py-4">{item.job_qualification}</td>
                  <td className="px-6 py-4">{item.job_type}</td>
                  <td className="px-6 py-4">{item.job_tenure}</td>
                  <td className="px-6 py-4">{item.company_name}</td>
                  <td className="px-6 py-4">
                    <img
                      src={item.company_image_url}
                      alt={`${item.company_name} logo`}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4">{item.company_city}</td>
                  <td className="px-6 py-4">
                    {`Rp${item.salary_min} - Rp${item.salary_max}`}
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
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-gray-300 p-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tabel;
