import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
const CompanyOverview = () => {
  return (
    <div className="companyoverview-container">
      <header className="header">Thông tin công ty</header>
      <div className="list-data">
        <ul>
          <li>
            <strong>Tên công ty</strong> <span>Công ty TNHH NHAHA</span>
          </li>
          <li>
            <strong>Website</strong>{" "}
            <Link to={"https://www.nhaha.com.vn/"}>
              https://www.nhaha.com.vn
            </Link>
          </li>
          <li>
            <strong>Ngày thành lập</strong> <span>Tháng 7, 2024</span>
          </li>
          <li>
            <strong>Vốn hóa</strong> <span>300,000$ tháng 7, 2024</span>
          </li>
          <li>
            <strong>Ban lãnh đạo</strong>
            <div>
              <p>Thái Bá Đạt Nhân - CEO </p>
              <p>Lê Đức Hải - CFO</p>
            </div>
          </li>
          <li>
            <strong>Hoạt động kinh doanh</strong>{" "}
            <span>
              Dịch vụ tài chính, Digital marketing, Thương mại điện tử
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyOverview;
