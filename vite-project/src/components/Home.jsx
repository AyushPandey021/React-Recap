import React from "react";

const Home = () => {
  const cards = [
    {
      title1: "Digital Banking",
      title2: "Platform",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      buttonText: "Click Here",
      bgColor: "bg-red-200",
    },
    {
      title1: "Ayush Pandey",
      title2: "Segmentation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      buttonText: "Apdev",
      bgColor: "bg-green-200",
    },
    {
      title1: "AI Analytics",
      title2: "Dashboard",
      description:
        "Analyze customer data efficiently and get predictive insights.",
      buttonText: "Explore",
      bgColor: "bg-yellow-200",
    },
  ];

  return (
    <div className="px-10 py-16 flex justify-between items-start gap-10">
      {/* Left Section (Heading) */}
      <div className="w-1/3">
        <h1 className="text-7xl font-bold leading-tight">Prospective</h1>
        <h1 className="text-7xl font-bold leading-tight">Customer</h1>
        <h1 className="text-7xl font-bold leading-tight text-blue-500">
          Segmentation
        </h1>
      </div>

      {/* Right Section (Dynamic Cards) */}
      <div className="w-2/3 flex gap-6 overflow-x-auto no-scrollbar">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`min-w-[100px] ${card.bgColor} p-4 rounded-2xl shadow-lg  transition-all duration-300`}
          >
            <h1 className="text-3xl font-semibold">{card.title1}</h1>
            <h2 className="text-3xl font-semibold mt-1">{card.title2}</h2>
            <p className="text-lg mt-4 text-gray-700">{card.description}</p>
            <button className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
