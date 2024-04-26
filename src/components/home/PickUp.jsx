import React from "react";

const listPickUp = [
  {
    title: "Top Message",
    des: "Message from Toshihide Endo, President & CEO, Representative Director",
  },
  {
    title: "Top Message",
    des: "Message from Toshihide Endo, President & CEO, Representative Director",
  },
  {
    title: "Top Message",
    des: "Message from Toshihide Endo, President & CEO, Representative Director",
  },
  {
    title: "Top Message",
    des: "Message from Toshihide Endo, President & CEO, Representative Director",
  },
];
const PickUp = () => {
  return (
    <div className="my-20 bg-custom-image p-5">
      <h3 className="text-center text-3xl font-bold text-white">Pick Up</h3>
      <div className="grid grid-cols-4 gap-4 p-14">
        {listPickUp.map((pickup, index) => (
          <div
            key={index}
            className="bg-gray-50 text-center h-[250px] rounded-lg"
          >
            <h4 className="text-blue-500 font-bold mt-[50px]">
              {pickup.title}
            </h4>
            <p className="text-black text-justify mt-[110px] rounded-lg bg-blue-100 p-3">
              {pickup.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickUp;
