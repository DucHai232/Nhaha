import React, { useEffect } from "react";
import ModalContact from "../components/contact/ModalContact";
import TopContact from "../components/contact/TopContact";
import CenterContact from "../components/contact/CenterContact";
import BottomContact from "../components/contact/BottomContact";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <TopContact />
      <CenterContact />
      <BottomContact />
    </div>
  );
};

export default Contact;
