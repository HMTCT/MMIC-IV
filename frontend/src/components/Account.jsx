import "../styles/test.css";
const userName = "Nguyen Van A";
const role = "Admin";

const Account = () => {
  return (
    <div className="flex h-full w-full gap-[20px]">
      <div className="flex flex-col w-fit h-full justify-between">
        <p className="text-base font-semibold leading-[normal] text-white">
          {userName}
        </p>
        <p className="text-sm font-normal leading-[normal] text-white">
          {role}
        </p>
      </div>
      <div className="w-[48px] h-[48px]">
        <img src="src/assets/account.png" alt="account" />
      </div>
    </div>
  );
};

export default Account;
