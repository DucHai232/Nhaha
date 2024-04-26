import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const listText = ["About Us", "Services", "Recruitment", "Contact"];
  const listPaths = ["/about", "services", "recruitment", "contact"];
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto justify-between items-center">
        <div className="text-white font-bold">Nhaha</div>
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
