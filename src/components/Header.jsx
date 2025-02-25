import { useContext } from "react";
import { UserLoginContext } from "../provider/UserLoginProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLogin, logoutState } = useContext(UserLoginContext);

  return (
    <div className="flex justify-between p-[20px] border-b-2 border-black">
      <div className="hover:cursor-pointer hover:text-white">
        <Link to={"/"}>홈</Link>
      </div>
      {!isLogin ? (
        <div className="flex gap-5">
          <Link to={"/login"} className="hover:cursor-pointer hover:text-white">
            로그인
          </Link>
        </div>
      ) : (
        <div className="flex gap-5">
          <Link
            to={"/profile"}
            className="hover:cursor-pointer hover:text-white"
          >
            프로필
          </Link>
          <Link to={"/test"} className="hover:cursor-pointer hover:text-white">
            테스트
          </Link>
          <Link
            to={"/results"}
            className="hover:cursor-pointer hover:text-white"
          >
            결과보기
          </Link>
          <Link
            to={"/"}
            className="hover:cursor-pointer hover:text-white"
            onClick={() => {
              logoutState();
            }}
          >
            로그아웃
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
