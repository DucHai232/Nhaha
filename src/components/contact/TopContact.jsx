import React from "react";
import SupportIcon from "@mui/icons-material/Support";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
const TopContact = () => {
  const style = {
    fontSize: "60px",
    color: "#4793AF",
  };
  return (
    <div className="my-4 flex">
      <div className="flex-1 text-center border-r-2 border-[#ccc]">
        <SupportIcon style={style} />
        <h3 className="text-[30px] font-light">Support</h3>
        <p className="mb-2">
          Get help with all{" "}
          <span className="text-[16px] text-blue-400">Adobe products</span>
        </p>
        <p className="mb-2">
          Get answers from the{" "}
          <span className="text-[16px] text-blue-400">Adobe Forums</span>
          community
        </p>
        <p className="mb-2">
          Find support options for{" "}
          <span className="text-[16px] text-blue-400">
            enterprise & business
          </span>
        </p>
      </div>
      <div className="flex-1 text-center">
        <PhoneForwardedIcon style={style} />

        <h3 className="text-[30px] font-light">Sales</h3>
        <p className="text-[16px] text-blue-400 mb-2">Purchase on Adobe.com</p>
        <p className="mb-2">Adobe Creative Cloud and Acrobat: 800-585-0774</p>
        <p className="mb-2">
          Creative Cloud for small and medium business: 800-915-9428
        </p>
        <p className="mb-2">Adobe Connect and LiveCycle: 800-685-3644</p>
        <p className="text-[16px] text-blue-400 mb-2">Learn about licensing</p>
      </div>
    </div>
  );
};

export default TopContact;
