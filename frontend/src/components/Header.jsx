import "../styles/test.css";
import NavButton from "./NavButton";
import Account from "./Account";
const Header = () => {
  return (
    <div className="header w-full h-[90px] bg-[#0D5074] flex py-[20px] px-[28px] justify-between">
      <div className="button-header h-hull flex gap-[40px]">
        <NavButton title="Overview" />
        <NavButton title="Patient" />
      </div>
      <div>
        <Account />
      </div>
    </div>
  );
};

export default Header;
