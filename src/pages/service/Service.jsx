import React, { useState } from "react";
import "./Service.css";
import { IoIosArrowDropright } from "react-icons/io";
const listService = [
  {
    icon: "https://www.new-work.se/NWSE/Company/Brands/Img-brandmodul-logo%E2%80%94xing.svg",
    active: "Desune",
    des: "DESUNE: hoạt động trong lĩnh vực thương mại điện tử và tiếp thị liên kết (Affiliate Marketing). Với các chiến lược tiếp thị số và mối quan hệ chặt chẽ với các đối tác, chúng tôi cam kết mang đến cho khách hàng những sản phẩm và dịch vụ chất lượng nhất.",
  },
  {
    icon: "https://www.new-work.se/NWSE/Company/Brands/Img-brandmodul-logo%E2%80%94xing.svg",
    active: "NHI",
    des: "NH-INVESTING: không chỉ cung cấp các dịch vụ tài chính, mà còn là một tập thể đầy đam mê và kiên định trong việc tạo ra giá trị. Chúng tôi đang xây dựng cơ sở vững chắc trong các lĩnh vực tài chính như forex, crypto và chứng khoán, từ đó hướng đến mục tiêu mở rộng ra thêm các dịch vụ tài chính đa dạng để phục vụ khách hàng.",
  },
  {
    icon: "https://www.new-work.se/NWSE/Company/Brands/Img-brandmodul-logo%E2%80%94xing.svg",
    active: "HATRU",
    des: "HATRU-Food: Thương hiệu của chúng tôi trong lĩnh vực nhà hàng và dịch vụ ăn uống, HATRU-Food, đồng nghĩa với sự xuất sắc trong ẩm thực và dịch vụ khách hàng xuất sắc. Chúng tôi kết hợp niềm đam mê với ẩm thực và cam kết chất lượng, mang đến những trải nghiệm ẩm thực đa dạng, phù hợp với sở thích và khẩu vị của khách hàng.",
  },
];
const Service = () => {
  const [data, setData] = useState(
    "DESUNE: hoạt động trong lĩnh vực thương mại điện tử và tiếp thị liên kết (Affiliate Marketing). Với các chiến lược tiếp thị số và mối quan hệ chặt chẽ với các đối tác, chúng tôi cam kết mang đến cho khách hàng những sản phẩm và dịch vụ chất lượng nhất."
  );
  const [active, setActive] = useState("Desune");
  const handleClick = (active, des) => {
    setActive(active);
    setData(des);
  };
  return (
    <div className="service-container">
      <div className="banner">
        <div className="content">
          <h1 className="title">Chào mừng bạn đến với NHAHA Co.Ltd</h1>
          <p className="des">
            Chúng tôi tự hào là một startup đầy nhiệt huyết hoạt động với tôn
            chỉ: "Năng động - Sáng tạo - Không bỏ cuộc". Với tinh thần tiên
            phong và cam kết vững chắc, các dịch vụ và sản phẩm của NHAHA tập
            trung vào sáng tạo và chất lượng. Chúng tôi kinh doanh dưới 3 thương
            hiệu
          </p>
        </div>
      </div>
      <div className="list-services">
        <div className="left">
          {listService.map((service) => (
            <button
              className={
                service.active === active ? "service active" : "service"
              }
              onClick={() => handleClick(service.active, service.des)}
            >
              <img
                src="https://www.new-work.se/NWSE/Company/Brands/Img-brandmodul-logo%E2%80%94xing.svg"
                className="image"
              />
              <span>
                <IoIosArrowDropright className="icon" />
              </span>
            </button>
          ))}
        </div>
        <div className="right">
          <img src="https://www.new-work.se/NWSE/Karriere/0.1-Relaunch/Brandmodul/Brand%20Images/10042/image-thumb__10042__brands_image/Brandimage-XING.webp" />
          <div className="des">{data}</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
