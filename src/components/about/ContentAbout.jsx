import React from "react";
import listDataContent from "../../data/ContentAbout.json";
import ImageBanner from "./ImageBanner";
import GridItem from "./GridItem";
import FollowSocial from "./FollowSocial";
const ContentAbout = () => {
  return (
    <div className="my-4">
      <ImageBanner />
      <GridItem data={listDataContent} />
      <FollowSocial />
    </div>
  );
};

export default ContentAbout;
