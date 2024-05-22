import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const listInput = [
  {
    id: 1,
    icon: SearchIcon,
    text: "Software engineer",
    title: "Role",
  },
  {
    id: 2,
    icon: LocationOnIcon,
    text: "Los Angeles",
    title: "Where?",
  },
];
const arrayTitle = [
  {
    id: 1,
    image: "https://www.gstatic.com/hiring/CportalUi/hero_4_1x.png",
    text: "Code",
    color: "text-orange-400",
  },
  {
    id: 2,
    image: "https://www.gstatic.com/hiring/CportalUi/hero_1_1x.png",
    text: "Design",
    color: "text-[#FF70AB]",
  },
  {
    id: 3,
    image: "https://www.gstatic.com/hiring/CportalUi/hero_3_1x.png",
    text: "Create",
    color: "text-[#03AED2]",
  },
];
const TopRec = () => {
  const [data, setData] = useState({
    id: 1,
    image: "https://www.gstatic.com/hiring/CportalUi/hero_1_1x.png",
    text: "Code",
    color: "text-orange-400",
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % arrayTitle.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setData(arrayTitle[index]);
  }, [index, arrayTitle]);
  return (
    <Container>
      <div className="flex justify-center items-center">
        <div className="mr-[200px]">
          <p className={`text-[100px] ${data.color} font-bold`}>{data.text}</p>
          <p className="text-[60px] font-bold">for everyone</p>
          <p className="mt-14 text-[26px]">Find your next job at Google</p>
        </div>
        <img src={data.image} />
      </div>
      <div className="mt-6 flex items-center">
        {listInput.map((input) => (
          <div key={input.id} className="mr-3">
            <label className="ml-3">{input.title}</label>
            <div className="relative">
              <span className="absolute top-2 left-2">
                <input.icon />
              </span>
              <input
                type="text"
                placeholder={input.text}
                className="border rounded-3xl border-[#ccc] p-2 pl-8 w-[250px]"
              />
            </div>
          </div>
        ))}
        <button className=" bg-blue-500 text-white rounded-3xl w-[100px] h-[40px] mt-5">
          Search
        </button>
      </div>
    </Container>
  );
};

export default TopRec;
