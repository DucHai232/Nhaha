import React from "react";

const ImageBanner = () => {
  return (
    <div className="my-3 relative">
      <img
        className="rounded-md"
        src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4HQox?ver=cb27&q=90&m=6&h=600&w=1600&b=%23FFFFFFFF&l=f&o=t&aim=true"
      />
      <div className="absolute top-[50%] left-[30px] text-white">
        <h1 className="text-[50px] font-bold">Empowering others</h1>
        <p className="w-[500px] font-medium">
          Our mission is to empower every person and every organization on the
          planet to achieve more.
        </p>
      </div>
    </div>
  );
};

export default ImageBanner;
