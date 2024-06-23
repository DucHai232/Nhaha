import React from "react";
import "./Recruitment.css";

const Recruitment = () => {
  return (
    <div className="recruitment-container">
      <div className="banner">
        <h1>Tuyển dụng</h1>
      </div>
      <div className="content">
        <div className="left">
          <h1>Đăng ký gia nhập</h1>
          <p className="des">
            "Làm việc vui vẻ - Làm việc hiệu quả - Làm việc có ích. Hãy gia nhập
            cùng chúng tôi và cùng nhau phát triển!"
          </p>
          <button>Thông tin tuyển dụng</button>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Recruitment;
