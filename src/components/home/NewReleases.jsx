import React, { useState } from "react";

const NewReleases = () => {
  const [changeInfo, setChangeInfo] = useState(false);
  console.log(changeInfo);
  return (
    <div className="my-8">
      <img src="https://www.sonyfg.co.jp/Portals/0/images/index/bg_newsreleases.png" />
      <div className="px-[200px]">
        <h3 className="text-center text-green-900 font-bold text-5xl">
          News Releases
        </h3>
        <div className="flex justify-center mt-4">
          <p
            className="text-2xl bg-green-100 w-[50%] text-center p-2 cursor-pointer hover:bg-green-300 transition-colors"
            onClick={() => setChangeInfo((prev) => !prev)}
          >
            Our Company
          </p>
          <p
            className="text-2xl bg-green-100 w-[50%] text-center  p-2 cursor-pointer  hover:bg-green-300 transition-colors "
            onClick={() => setChangeInfo((prev) => !prev)}
          >
            Group Companies
          </p>
        </div>
        {changeInfo &&
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`mt-7 w-full ${index % 2 !== 0 ? "bg-green-100" : ""}`}
            >
              <p>
                Apr.24, 2024{" "}
                <span className="inline-block border border-solid border-green-700 w-[100px] text-center p-1">
                  HR
                </span>
              </p>
              <p>
                Announcement of Executive Appointments and the New Management
                Team(PDF 205KB) <span className="text-red-500">NEW</span>
              </p>
            </div>
          ))}

        {!changeInfo &&
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`mt-7 w-full ${index % 2 !== 0 ? "bg-green-100" : ""}`}
            >
              <p>
                Jun. 09, 2020{" "}
                <span className="inline-block border border-solid border-green-700 w-[100px] text-center p-1">
                  HR
                </span>
                <span className="inline-block border border-solid border-green-700 w-[200px] text-center p-1 ml-3">
                  Life Insurance
                </span>
              </p>
              <p>
                Disclosure of Market Consistent Embedded Value as of March 31,
                2020(PDF 272KB)
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewReleases;
