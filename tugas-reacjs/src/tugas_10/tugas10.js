import React, { useEffect, useState } from "react";
import axios from "axios";

const Tugas10 = () => {
  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchStatus) {
      axios
        .get("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score")
        .then((res) => {
          setData(res.data);
          setFetchStatus(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [fetchStatus]);

  const handleIndexScore = (score) => {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "E";
  };


  return (
    <div className="App">
      <div className="container">
        <div className="relative overflow-x-auto shadow-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs bg-purple-700 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Course</th>
                <th scope="col" className="px-6 py-3">Score</th>
                <th scope="col" className="px-6 py-3">Grade</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center">No data available</td>
                </tr>
              ) : (
                data.map((res, index) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={res.id}>
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{res.name}</td>
                    <td className="px-6 py-4">{res.course}</td>
                    <td className="px-6 py-4">{res.score}</td>
                    <td className="px-6 py-4">{handleIndexScore(res.score)}</td>
                    <td className="px-6 py-4">
                      <button
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 dark:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tugas10;
