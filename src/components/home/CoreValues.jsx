import React from "react";
import "./Home.css";
import { FcIdea } from "react-icons/fc";
import { FaPeopleArrows } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";
import { handleNavigate } from "../../utils/Navigate";

const listDataCard = [
  {
    icon: <FcIdea />,
    title: "Sáng tạo",
    des: "Mỗi ngày một ý tưởng mới: Chúng tôi không ngừng tìm kiếm và phát triển những ý tưởng sáng tạo, đổi mới mỗi ngày để đem lại giá trị đột phá cho khách hàng và công ty.",
  },
  {
    icon: <GiCoins />,
    title: "Hữu ích",
    des: "Cam kết mang lại giá trị thật: Chúng tôi luôn đặt lợi ích của khách hàng lên hàng đầu, cam kết cung cấp những sản phẩm và dịch vụ thực sự hữu ích và có giá trị.",
  },
  {
    icon: <FaPeopleArrows />,
    title: "Con người",
    des: "Khách hàng là mục tiêu, nhân viên là sức mạnh: Khách hàng là trọng tâm của mọi hoạt động, và nhân viên chính là sức mạnh, là nguồn lực quan trọng giúp chúng tôi thực hiện và vượt qua các mục tiêu đề ra.",
  },
];
const CoreValues = () => {
  return (
    <div className="corevalue-container">
      <div className="left">
        <h1>Tầm nhìn chiến lược</h1>
        <div>
          Chúng tôi là một công ty khởi nghiệp với mục tiêu dài hạn trở thành
          một trong những công ty đầu tư tài chính hàng đầu tại Châu Á. Giá trị
          cốt lõi của chúng tôi dựa trên ba yếu tố: Sáng tạo, Hữu ích và Con
          người.
        </div>
        <button onClick={() => handleNavigate("/about/our-vision")}>
          Xem thêm
        </button>
      </div>
      <div className="list-cards">
        {listDataCard.map((card) => (
          <div className="card">
            <p className="icon">{card.icon}</p>
            <h2>{card.title}</h2>
            <p className="des">{card.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
