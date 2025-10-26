import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detailed, setDetailed] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !detailed.trim()) return;
    const newTask = { title, detailed };
    setTask([newTask, ...task]);
    setTitle("");
    setDetailed("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black  w-screen text-white p-8">
      {/* Title */}
      <h1 className="text-green-400 text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-wide drop-shadow-lg">
        Task Manager
      </h1>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left Side Form */}
        <form
          onSubmit={submitHandler}
          className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full md:w-1/3 flex flex-col gap-6 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-green-400 mb-2 text-center">
            Add New Task
          </h2>

          <input
            type="text"
            required
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/90 transition"
          />

          <textarea
            required
            rows="4"
            placeholder="Enter Task Details"
            value={detailed}
            onChange={(e) => setDetailed(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700/90 transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 active:bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-green-400/40 transition duration-300"
          >
            Add Task
          </button>
        </form>

        
        <div className="w-full md:w-2/3 max-h-[70vh] overflow-y-auto flex flex-wrap gap-6 p-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {task.length === 0 ? (
            <p className="text-gray-400 text-center w-full mt-10 text-lg">
              No tasks here🤗
            </p>
          ) : (
            task.map((elem, idx) => (
              <div
                key={idx}
                className="bg-[url('https://imgs.search.brave.com/NOjR5osJz3roayRpl5glJKvOr0lQHV_3qf6fEB6Q97w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMzLzU3/L2FiLzMzNTdhYjIz/NDYyZGNmNjIzMGMw/MDQxNjc4NmQ3ZTdm/LmpwZw')]  rounded-2xl p-5 w-50 flex flex-col justify-between  border bg-cover border-gray-200"
              >
                <div>
                  <h3 className="text-gray-900 text-xl font-bold mb-2 truncate first-letter:uppercase">
                    {elem.title}
                  </h3>
                  <hr  className="text-green-800"/>
                  <p className="mt-5 text-gray-900 items-center text-xl leading-snug line-clamp-4 first-letter:uppercase">
                    {elem.detailed}
                  </p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button className="text-xs px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                    Done
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
