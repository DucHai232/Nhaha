import React, { useState } from "react";
import { Carousel } from "antd";
import PickUp from "../components/home/PickUp";
import NewReleases from "../components/home/NewReleases";
import CoreValues from "../components/home/CoreValues";
const listImages = [
  "https://previews.123rf.com/images/jameschipper/jameschipper1207/jameschipper120700019/14417234-business-people-background.jpg",
  "https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg",
  "https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-technology-business-business-people-business-portrait-composition-image_796697.jpg",
];
const Home = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <div>
        <Carousel autoplay className="w-full h-[500px]">
          {listImages.map((image, index) => (
            <div style={contentStyle}>
              <img src={image} className="w-full h-[500px] object-cover" />
            </div>
          ))}
        </Carousel>
      </div>
      <CoreValues />
      {/* <PickUp />
      <NewReleases /> */}
    </>
  );
};

export default Home;
