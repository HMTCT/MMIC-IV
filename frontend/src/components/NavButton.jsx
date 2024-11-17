import { useLocation, useNavigate } from "react-router-dom";
import "../styles/test.css";

const NavButton = ({ title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = location.pathname === "/" ? "overview" : "patient";

  const handleClick = () => {
    if (title.toLowerCase() === "overview") {
      navigate("/");
    } else {
      navigate(`/${title.toLowerCase()}`);
    }
  };

  return (
    <button
      className={`nav-button text-xl font-semibold leading-[normal] px-[16px] py-[8px] rounded-[12px] ${title.toLowerCase() === currentPage ? "bg-white text-[#0D5074]" : "bg-none text-white"} hover:bg-[#407796] hover:text-white`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default NavButton;
