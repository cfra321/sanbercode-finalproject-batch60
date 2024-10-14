import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageData = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    id: null,
    name: "",
    description: "",
    category: "",
    size: "",
    price: "",
    rating: "",
    image_url: "",
    is_android_app: "",
    is_ios_app: "",
    release_year: "",
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page

  useEffect(() => {
    if (fetchStatus) {
      axios
        .get("https://quiz-api-rho.vercel.app/api/mobile-apps")
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
      "name",
      "description",
      "category",
      "size",
      "rating",
      "image_url",
      "release_year",
    ];

    for (const field of requiredFields) {
      if (!input[field]) {
        console.error(`Field ${field} is required`);
        return;
      }
    }

    const {
      id,
      name,
      description,
      category,
      size,
      price,
      rating,
      image_url,
      is_android_app,
      is_ios_app,
      release_year,
    } = input;

    const payload = {
      name,
      description,
      category,
      size: parseInt(size),
      price: parseInt(price),
      rating: parseInt(rating),
      image_url,
      is_android_app: parseInt(is_android_app),
      is_ios_app: parseInt(is_ios_app),
      release_year: parseInt(release_year),
    };

    if (isEdit) {
      axios
        .put(`https://quiz-api-rho.vercel.app/api/mobile-apps/${id}`, payload)
        .then((res) => {
          console.log("Data updated:", res);
          resetForm();
          setFetchStatus(true);
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    } else {
      axios
        .post("https://quiz-api-rho.vercel.app/api/mobile-apps", payload)
        .then((res) => {
          console.log("Data submitted:", res);
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
      name: "",
      description: "",
      category: "",
      size: "",
      price: "",
      rating: "",
      image_url: "",
      is_android_app: "",
      is_ios_app: "",
      release_year: "",
    });
  };

  const handleEdit = (item) => {
    setInput({
      id: item._id,
      name: item.name,
      description: item.description,
      category: item.category,
      size: item.size,
      price: item.price,
      rating: item.rating,
      image_url: item.image_url,
      is_android_app: item.is_android_app,
      is_ios_app: item.is_ios_app,
      release_year: item.release_year || "",
    });
    setIsEdit(true);
  };

  const handleDelete = (_id) => {
    axios
      .delete(`https://quiz-api-rho.vercel.app/api/mobile-apps/${_id}`)
      .then((res) => {
        console.log("Data deleted:", res);
        setFetchStatus(true);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage); // Ensure this is defined

  const handlePageChange = (page) => {
    setCurrentPage(page); // Ensure this function is defined
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Manage Data</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Form Inputs */}
          <input
            name="name"
            value={input.name}
            onChange={handleInput}
            placeholder="Name"
            className="p-2 border rounded"
            required
          />
          <input
            name="description"
            value={input.description}
            onChange={handleInput}
            placeholder="Description"
            className="p-2 border rounded"
            required
          />
          <input
            name="category"
            value={input.category}
            onChange={handleInput}
            placeholder="Category"
            className="p-2 border rounded"
            required
          />
          <input
            name="size"
            value={input.size}
            onChange={handleInput}
            placeholder="Size (MB)"
            className="p-2 border rounded"
            required
          />
          <input
            name="price"
            type="number"
            value={input.price}
            onChange={handleInput}
            placeholder="Price"
            className="p-2 border rounded"
            required
            min="0"
            max="9999999"
            step="1"
          />
          <input
            name="rating"
            type="number"
            value={input.rating}
            onChange={handleInput}
            placeholder="Rating (0-5)"
            className="p-2 border rounded"
            min="1"
            max="5"
            required
          />
          <input
            name="image_url"
            value={input.image_url}
            onChange={handleInput}
            placeholder="Image URL"
            className="p-2 border rounded"
            required
          />
          <input
            name="is_android_app"
            value={input.is_android_app}
            onChange={handleInput}
            placeholder="Is Android App (0 or 1)"
            className="p-2 border rounded"
            required
          />
          <input
            name="is_ios_app"
            value={input.is_ios_app}
            onChange={handleInput}
            placeholder="Is iOS App (0 or 1)"
            className="p-2 border rounded"
            required
          />
          <input
            name="release_year"
            value={input.release_year}
            onChange={handleInput}
            placeholder="Release Year"
            className="p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {isEdit ? "Update" : "Submit"}
        </button>
      </form>

      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs bg-purple-700 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Size</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Rating</th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Android</th>
              <th scope="col" className="px-6 py-3">iOS</th>
              <th scope="col" className="px-6 py-3">Release Year</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(currentItems) && currentItems.length === 0 ? (
              <tr>
                <td colSpan="11" className="px-6 py-4 text-center">
                  No data available
                </td>
              </tr>
            ) : (
              currentItems.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</td>
                  <td className="px-6 py-4">{item.description}</td>
                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.size} MB</td>
                  <td className="px-6 py-4">
  {item.price === 0 ? "FREE" : `Rp${new Intl.NumberFormat('id-ID').format(item.price)}`}
</td>
                  <td className="px-6 py-4">{item.rating}</td>
                  <td className="px-6 py-4">
                    <img src={item.image_url} alt={item.name} className="w-20 h-20 object-cover" />
                  </td>
                  <td className="px-6 py-4">{item.is_android_app ? "Yes" : "No"}</td>
                  <td className="px-6 py-4">{item.is_ios_app ? "Yes" : "No"}</td>
                  <td className="px-6 py-4">{item.release_year || "-"}</td>
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

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-gray-300 p-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
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

export default ManageData;
