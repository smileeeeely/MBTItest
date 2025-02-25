import { useContext } from "react";
import { UserLoginContext } from "../provider/UserLoginProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLogin, logoutState } = useContext(UserLoginContext);

  return (
    <div className="h-full bg-gray-100 flex flex-col justify-between bg-primary-color p-4 shadow-md">
      <div className="flex justify-between bg-primary-color p-4 shadow-md">
        <div className="text-lg fond-semibold hover:cursor-pointer hover:text-gray-300">
          <Link to={"/"}>홈</Link>
        </div>
        {!isLogin ? (
          <div className="flex gap-5">
            <Link
              to={"/login"}
              className="hover:cursor-pointer hover:text-gray-300"
            >
              로그인
            </Link>
          </div>
        ) : (
          <div className="flex gap-5">
            <Link
              to={"/profile"}
              className="hover:cursor-pointer hover:text-gray-300"
            >
              프로필
            </Link>
            <Link
              to={"/test"}
              className="hover:cursor-pointer hover:text-gray-300"
            >
              테스트
            </Link>
            <Link
              to={"/results"}
              className="hover:cursor-pointer hover:text-gray-300"
            >
              결과보기
            </Link>
            <Link
              to={"/"}
              className="hover:cursor-pointer hover:text-gray-300"
              onClick={() => {
                logoutState();
              }}
            >
              로그아웃
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
