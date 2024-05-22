import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
const FollowSocial = () => {
  return (
    <div className="my-[20px] flex items-center">
      <p className="text-[#ccc]">
        Follow <span className="font-bold text-blue-500">N.ha.ha</span>{" "}
      </p>
      <ul className="flex list-none ml-5">
        <li className="ml-3 text-blue-700 cursor-pointer">
          <FacebookIcon />
        </li>
        <li className="ml-3 text-[#FF5580] cursor-pointer">
          <InstagramIcon />
        </li>
        <li className="ml-3 text-[#1679AB] cursor-pointer">
          <TelegramIcon />
        </li>
      </ul>
    </div>
  );
};

export default FollowSocial;
