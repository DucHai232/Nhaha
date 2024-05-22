import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
const listBottom = [
  {
    id: "1",
    list: ["Media inquiries", "Government Relations", "Accessibility"],
  },
  {
    id: "2",
    list: ["Integrity", "Law enforcement", "Genuine software", "Report piracy"],
  },
  {
    id: "3",
    list: ["Sponsorships", "Branded gear", "Customer Showcase"],
  },
  {
    id: "4",
    list: ["Adobe Research", "User research", "Adobe Ventures"],
  },
];
const BottomContact = () => {
  return (
    <>
      <div className="mt-3 bg-[#d5d5d5] flex justify-between text-center py-6 px-[200px]">
        {listBottom.map((el) => (
          <ul key={el.id}>
            {el.list.map((item) => (
              <li className="mb-3 text-blue-600">
                <Link>{item}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="mt-4">
        <ul className="flex list-none justify-center">
          <li className="mr-2 text-blue-700 cursor-pointer">
            <Link>
              <FacebookIcon style={{ fontSize: "40px" }} />
            </Link>
          </li>
          <li className="mr-2 text-[#FF5580] cursor-pointer">
            <Link>
              <InstagramIcon style={{ fontSize: "40px" }} />
            </Link>
          </li>
          <li className="mr-2 text-[#1679AB] cursor-pointer">
            <Link>
              <TelegramIcon style={{ fontSize: "40px" }} />
            </Link>
          </li>
        </ul>
        <p className="flex justify-center text-blue-600">
          <Link>More communities ›</Link>
        </p>
      </div>
    </>
  );
};

export default BottomContact;
