import React from "react";
import TopRec from "../components/recruitment/TopRec";
import CenterRec from "../components/recruitment/CenterRec";
import BottomRec from "../components/recruitment/BottomRec";

const Recruitment = () => {
  return (
    <div className="my-7">
      <TopRec />
      <CenterRec />
      <BottomRec />
    </div>
  );
};

export default Recruitment;
