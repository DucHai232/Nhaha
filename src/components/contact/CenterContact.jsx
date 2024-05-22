import React from "react";
import { Link } from "react-router-dom";
const listCorporate = [
  "Adobe",
  "345 Park Avenue",
  "San Jose, CA 95110-2704",
  "Tel: 408-536-6000",
  "Fax: 408-537-6000",
];
const CenterContact = () => {
  return (
    <>
      <div className="mt-3 bg-[#d5d5d5] text-center p-8">
        <h3 className="text-[40px] font-extralight">Security</h3>
        <p className="mb-3">
          Report security issues and vulnerabilities.
          <Link className=" text-blue-500">Learn how</Link>
        </p>
        <p>
          Security bulletins and advisories{" "}
          <Link className=" text-blue-500">Read more</Link>
        </p>
      </div>
      <div className="flex px-24 my-6">
        <img
          src="https://www.adobe.com/content/dam/cc/en/aboutadobe/images/cu-feature-sj-hq_666x211.jpg.img.jpg"
          className="rounded-md flex-1"
        />

        <ul className="flex-1 list-none ml-8">
          <li className="font-bold text-[18px]">Office locations</li>
          <li className="font-bold">Corporate headquarters:</li>
          {listCorporate.map((cor) => (
            <li className="font-extralight">{cor}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CenterContact;
