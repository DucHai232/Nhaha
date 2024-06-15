import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
const HeaderAbout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosIcon />
        <span className="ml-5">Trở về</span>
      </div>
      <div className="flex absolute top-0 right-24">
        <span className="cursor-pointer">Nhaha</span>
        <p className="ml-5 items-center cursor-pointer">
          <span className="text-[#ccc]">
            <SearchIcon />
          </span>
          <span>Tìm kiếm</span>
        </p>
      </div>
    </div>
  );
};

export default HeaderAbout;
