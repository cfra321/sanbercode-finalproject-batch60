import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const Tugas11 = () => {
    const [data, setData] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(true);
    const [input, setInput] = useState({ name: "", course: "", score: "" });

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
                    alert("Failed to fetch data");
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

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check for empty inputs
        if (!input.name.trim() || !input.course.trim() || input.score === "") {
            alert("All fields are required."); // Show error message
            return; // Prevent submission
        }

        // Convert score to a number
        const score = Number(input.score);
        if (isNaN(score) || score < 0) {
            alert("Score must be a valid number greater than or equal to 0.");
            return; // Prevent submission
        }

        axios.post("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score", { ...input, score })
            .then((res) => {
                setFetchStatus(true); // Refresh data after submission
                alert("Data has been submitted successfully.");
            })
            .catch((error) => {
                console.error("Error submitting data:", error);
                alert("Failed to submit data");
            });

        setInput({ name: "", course: "", score: "" }); // Clear inputs after submission
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            axios
                .delete(`https://6678f9f40bd45250562081d9.mockapi.io/api/student-score/${id}`)
                .then(() => {
                    setFetchStatus(true); // Refresh data after deletion
                    alert("The record has been deleted.");
                })
                .catch((error) => {
                    console.error("Error deleting data:", error);
                    alert("Failed to delete data");
                });
        }
    };

    return (
        <div className="App">
            <div className="container">
                <div className="relative overflow-x-auto shadow-md">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs bg-purple-700 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 ">No</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">MATA KULIAH</th>
                                <th scope="col" className="px-6 py-3">NILAI</th>
                                <th scope="col" className="px-6 py-3">INDEX NILAI</th>
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
                                        <td className="px-6 py-4 font-bold">{index + 1}</td>
                                        <td className="px-6 py-4">{res.name}</td>
                                        <td className="px-6 py-4">{res.course}</td>
                                        <td className="px-6 py-4">{res.score}</td>
                                        <td className="px-6 py-4">{handleIndexScore(res.score)}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => handleDelete(res.id)}
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

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4  mt-4 rounded shadow-md">
                    <label className="text font-semibold" htmlFor="name">Name :</label>
                    <input
                        id="name"
                        name="name"
                         placeholder="Nama Lengkap"
                        value={input.name}
                        onChange={handleInput}
                        className="border border-gray-400 p-2 rounded bg-gray-100"
                    />
                    <label className="text font-semibold" htmlFor="course">Mata Kuliah :</label>
                    <input
                        id="course"
                        name="course"
                         placeholder="Nama Mata Kuliah"
                        value={input.course}
                        onChange={handleInput}
                        className="border border-gray-400 p-2 rounded bg-gray-100"
                    />
                    <label className="text font-semibold" htmlFor="score">Nilai :</label>
                    <input
                        id="score"
                        name="score"
                        type="number" // Ensure it's a number
                        placeholder="0"
                        value={input.score}
                        onChange={handleInput}
                        className="border border-gray-400 p-2 rounded bg-gray-100"
                    />
                    <input
                        type="submit"
                        className="bg-blue-700 text-white p-2 rounded cursor-pointer hover:bg-blue-900"
                    />
                </form>
            </div>
        </div>
    );
};

export default Tugas11;
