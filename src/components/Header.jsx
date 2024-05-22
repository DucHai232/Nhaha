import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const listText = ["About Us", "Services", "Recruitment", "Contact"];
  const listPaths = ["/about", "services", "recruitment", "contact"];
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto justify-between items-center">
        <div className="flex">
          <div
            className="text-white font-bold ml-[435px] mb-5 text-4xl"
            onClick={() => navigate("/")}
          >
            Nhaha Group
          </div>
          <div className="flex text-white items-center ml-[220px]">
            <p className="mx-2">FAQS</p>
            <p className="mx-2">For Inquiry</p>
            <p className="mx-2 border-solid border-r-2 p-2">JP</p>
            <p className="mx-2">EN</p>
          </div>
        </div>
        <ul className="flex justify-center">
          {listText.map((text, index) => (
            <li key={index} className="px-14 text-xl">
              <Link to={listPaths[index]} className="text-white">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
