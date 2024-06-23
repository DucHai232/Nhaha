import { useNavigate } from "react-router-dom";

export const handleNavigate = (link) => {
  const navigate = useNavigate();
  navigate(link);
  window.scrollTo(0, 0);
};
