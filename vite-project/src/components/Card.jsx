import React from "react";

const JobCard = ({ company, title, salary, location, type1, type2, logo, saved }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-72 p-5 flex-shrink-0 cursor-pointer">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-3">
        <img src={logo} alt={company} className="w-10 h-10 rounded-full object-contain" />
        <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
          {saved ? "Saved" : "Save"}
        </span>
      </div>

      {/* Company Info */}
      <p className="text-gray-500 text-sm mb-1">{company}</p>
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>

      {/* Job Tags */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <span className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700">{type1}</span>
        <span className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700">{type2}</span>
      </div>

      {/* Salary + Button */}
      <div className="flex justify-between items-center mt-3">
        <div>
          <p className="font-semibold text-gray-800">{salary}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <button className="px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-all">
          Apply now
        </button>
      </div>
    </div>
  );
};

const JobCardsRow = () => {
  const jobs = [
    {
      company: "Airbnb",
      title: "Junior UI/UX Designer",
      salary: "$100/hr",
      location: "Delhi, India",
      type1: "Contract",
      type2: "Remote",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
      saved: false,
    },
    {
      company: "Apple",
      title: "Graphic Designer",
      salary: "$85–120k",
      location: "Kerala, India",
      type1: "Full-Time",
      type2: "Flexible Schedule",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      saved: true,
    },
    {
      company: "Google",
      title: "Product Designer",
      salary: "$110–140k",
      location: "Bangalore, India",
      type1: "Full-Time",
      type2: "Hybrid",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      saved: false,
    },
    {
      company: "Microsoft",
      title: "UI Engineer",
      salary: "$90–130k",
      location: "Hyderabad, India",
      type1: "Full-Time",
      type2: "Remote",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      saved: true,
    },

  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        💼 Latest Job Openings
      </h1>

      {/* Horizontal Scroll Row */}
  <div className="flex flex-wrap gap-6 px-8 pb-5">
  {jobs.map((job, index) => (
    <JobCard key={index} {...job} />
  ))}
      </div>
    </div>
  );
};

export default JobCardsRow;
