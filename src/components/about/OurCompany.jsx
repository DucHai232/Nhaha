import React from "react";
import ImageBanner from "./ImageBanner";
import GridItem from "./GridItem";
import listOurCompany from "../../data/OurCompany.json";
import FollowSocial from "./FollowSocial";
const OurCompany = () => {
  return (
    <div>
      <ImageBanner />
      <GridItem data={listOurCompany} />
      <FollowSocial />
    </div>
  );
};

export default OurCompany;
