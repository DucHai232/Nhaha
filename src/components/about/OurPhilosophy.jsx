import React from "react";

const OurPhilosophy = () => {
  return (
    <div className="ourphilosophy-container">
      <h1 className="title">Triết lý công ty</h1>
      <div className="banner">
        {/* <p>Our Slogan</p>
        <p>"Hạnh phúc mỗi ngày, hiệu quả mỗi giờ, có ích mỗi lúc"</p> */}
      </div>
      <div className="body1">
        <div className="left" style={{ width: "888px" }}>
          <header style={{ fontStyle: "italic" }}>"Hạnh phúc mỗi ngày"</header>
          <div className="des">
            <ul>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  fontStyle: "italic",
                }}
              >
                Thể hiện cam kết của chúng tôi về việc tạo ra một môi trường làm
                việc tích cực và tràn đầy năng lượng. Chúng tôi tin rằng hạnh
                phúc là chìa khóa để thúc đẩy sự sáng tạo, nâng cao tinh thần
                làm việc và xây dựng một cộng đồng nhân viên mạnh mẽ.
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <img
            src="https://www.borealisgroup.com/storage/News/2022/2022-04-05/Innovation-Laboratory-Linz_cBorealis.jpg"
            style={{ height: "300px", width: "800px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="body1">
        <div className="left" style={{ width: "888px" }}>
          <header style={{ fontStyle: "italic" }}>"Hiệu quả mỗi giờ"</header>
          <div className="des">
            <ul>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  fontStyle: "italic",
                }}
              >
                Là cam kết của chúng tôi về sự chuyên nghiệp và năng suất. Chúng
                tôi tôn trọng thời gian của mỗi người và đảm bảo rằng mỗi giờ
                làm việc đều được sử dụng một cách hiệu quả nhất.
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <img
            src="https://www.borealisgroup.com/storage/News/2022/2022-04-05/Innovation-Laboratory-Linz_cBorealis.jpg"
            style={{ height: "300px", width: "800px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="body1">
        <div className="left" style={{ width: "888px" }}>
          <header style={{ fontStyle: "italic" }}>"Có ích mỗi lúc"</header>
          <div className="des">
            <ul>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "20px",
                  lineHeight: "3rem",
                  fontStyle: "italic",
                }}
              >
                Là tôn chỉ của chúng tôi để mang lại giá trị cho mọi người liên
                quan, bao gồm cả khách hàng, cộng đồng và cả nhân viên. Chúng
                tôi không chỉ tập trung vào việc tạo ra lợi nhuận, mà còn đặt
                lợi ích của khách hàng và cộng đồng lên hàng đầu.
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <img
            src="https://www.borealisgroup.com/storage/News/2022/2022-04-05/Innovation-Laboratory-Linz_cBorealis.jpg"
            style={{ height: "300px", width: "800px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurPhilosophy;
