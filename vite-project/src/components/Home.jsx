import React from "react";

const Home = () => {
  const cards = [
    {
      title1: "Digital Banking",
      title2: "Platform",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      buttonText: "Click Here",
      bgimg: "https://plus.unsplash.com/premium_photo-1760531730393-f210acf4d104?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
    },
    {
      title1: "Ayush Pandey",
      title2: "Segmentation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      buttonText: "Apdev",
      bgimg: "https://images.unsplash.com/photo-1760625525477-f725e48f5a13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
    },
    {
      title1: "AI Analytics",
      title2: "Dashboard",
      description:
        "Analyze customer data efficiently and get predictive insights.",
      buttonText: "Explore",
      bgimg: "https://plus.unsplash.com/premium_photo-1760614424094-4625f04d287d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
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

   {/* right */}
      <div className="w-2/3 flex gap-6 overflow-x-auto no-scrollbar">
        {cards.map((card, index) => (
          <div>
          <img
          src={card.bgimg }
            key={index}
            className={`min-w-[100px] p-4 rounded-2xl shadow-lg  transition-all duration-300`}
          />
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
