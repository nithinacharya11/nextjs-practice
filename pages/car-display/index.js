// import { useState, useEffect } from "react";

// function CarList() {
//     const [carType, setCarType] = useState(1);
//     const [carList, setCarList] = useState([]);
  
//     const handleTabClick = (type) => {
//       setCarType(type);
//     };
  
//     useEffect(() => {
//       fetch("https://jsonplaceholder.typicode.com/photos")
//         .then((response) => response.json())
//         .then((data) => setCarList(data));
//     }, []);
  
//     const filteredCarList = carList.filter((car) => car.id === carType);

//     return (
//         <div>
//           <div className="flex gap-[100px]">
//             <button
//               className={`${
//                 carType === "1" ? "bg-gray-500 text-white" : ""
//               }`}
//               onClick={() => handleTabClick(1)}
//             >
//               first picture
//             </button>
//             <button
//               className={`${
//                 carType === "2" ? "bg-gray-500 text-white" : ""
//               }`}
//               onClick={() => handleTabClick(2)}
//             >
//               second picture
//             </button>
//             <button
//               className={`${
//                 carType === "3" ? "bg-gray-500 text-white" : ""
//               }`}
//               onClick={() => handleTabClick(3)}
//             >
//               third picture
//             </button>
//           </div>
//           <div className="flex flex-wrap">
//             {filteredCarList.map((car, index) => (
//             <div key={index} className="w-1/4 p-4 text-black">
//                 <img src={car.url} alt={car.name} />
//                 <h2>{car.id}</h2>
//                 <p>{car.title}</p>
//             </div>
//             ))}
//           </div>
//         </div>
// );
// }

// export default CarList

// import { useState, useEffect } from "react";

// function Tab({ label, active, onClick }) {
//   return (
//     <div
//       className={`${
//         active ? "border-2 border-black" : ""
//       } cursor-pointer`}
//       onClick={onClick}
//     >
//       {label}
//     </div>
//   );
// }

// function CarList() {
//   const [activeTab, setActiveTab] = useState("regular");
//   const [carList, setCarList] = useState([]);

//   useEffect(() => {
//     // Load car data from JSON file
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((response) => response.json())
//       .then((data) => setCarList(data));
//   }, []);

//   const filteredCarList = carList.filter((car) => car.id === activeTab);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div>
//       <div className="flex justify-center mb-4">
//         <Tab
//           label="Regular"
//           active={activeTab === "regular"}
//           onClick={() => handleTabClick(1)}
//         />
//         <Tab
//           label="Premium"
//           active={activeTab === "premium"}
//           onClick={() => handleTabClick(2)}
//         />
//         <Tab
//           label="Sports"
//           active={activeTab === "sports"}
//           onClick={() => handleTabClick(3)}
//         />
//       </div>
//       <div className="grid grid-cols-4 gap-4">
//         {filteredCarList.map((car, index) => (
//         <div key={index} className="w-1/4 p-4 text-black">
//             <img src={car.url} alt={car.name} />
//             <h2>{car.id}</h2>
//             <p>{car.title}</p>
//         </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CarList;

import { useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function CarList() {
  const [activeTab, setActiveTab] = useState(0);
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    // Load car data from JSON file
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setCarList(data));
  }, []);

  const regularCars = carList.filter((car) => car.id === 1);
  const premiumCars = carList.filter((car) => car.id === 2);
  const sportsCars = carList.filter((car) => car.id === 3);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
      <TabList>
        <Tab>Regular</Tab>
        <Tab>Premium</Tab>
        <Tab>Sports</Tab>
      </TabList>
      <TabPanel>
        <div className="grid grid-cols-4 gap-4">
          {regularCars.map((car, index) => (
            <div key={index} className="p-4 border rounded-md">
              <img src={car.url} alt={car.name} className="w-full" />
              <h2 className="mt-2 mb-1 text-lg font-medium">{car.name}</h2>
              <p className="text-gray-500">{car.title}</p>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-4 gap-4">
          {premiumCars.map((car, index) => (
            <div key={index} className="p-4 border rounded-md">
              <img src={car.url} alt={car.name} className="w-full" />
              <h2 className="mt-2 mb-1 text-lg font-medium">{car.name}</h2>
              <p className="text-gray-500">{car.title}</p>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-4 gap-4">
          {sportsCars.map((car, index) => (
            <div key={index} className="p-4 border rounded-md">
              <img src={car.url} alt={car.name} className="w-full" />
              <h2 className="mt-2 mb-1 text-lg font-medium">{car.name}</h2>
              <p className="text-gray-500">{car.title}</p>
            </div>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default CarList;
