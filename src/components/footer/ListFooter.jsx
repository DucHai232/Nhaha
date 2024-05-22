import React from "react";

const ListFooter = ({ data }) => {
  console.log(data.listText);
  return (
    <div>
      <h1 className="font-bold text-[20px]">{data.title}</h1>
      <ul className="list-none">
        {data.listText.map((text) => (
          <li className="text-[#7a7a7a] my-[12px] text-[12px]">{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListFooter;
