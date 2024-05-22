import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
const ModalContact = ({ open, handleClose }) => {
  const [language, setLanguage] = useState("english");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="relative">
          <div
            className="absolute top-2 right-2 text-[#ccc] cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon />
          </div>
          <div className="flex my-3">
            <span
              className={
                language === "english"
                  ? "border-b-2 font-bold border-black"
                  : "cursor-pointer"
              }
              onClick={() => setLanguage("english")}
            >
              English
            </span>
            <span
              className={
                language === "vietnam"
                  ? "ml-5 font-bold border-b-2 border-black"
                  : "ml-5 cursor-pointer"
              }
              onClick={() => setLanguage("vietnam")}
            >
              Tiếng việt
            </span>
          </div>
          <p className="text-blue-500 text-[30px] font-bold">
            {language === "english" ? "N.ha.ha hello!" : "N.ha.ha xin chào!"}
          </p>
          <p className="text-[16px]">
            {" "}
            {language === "english"
              ? "Thank you for your interest in us"
              : "Cảm ơn bạn đã quan tâm đến chúng tôi"}
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalContact;
