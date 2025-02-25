import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { useContext } from "react";
import { UserLoginContext } from "../provider/UserLoginProvider";

const PageLogin = () => {
  const navigate = useNavigate();
  const { loginState, setUser } = useContext(UserLoginContext);

  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);

      if (response.success) {
        setUser(response);
        loginState(response.accessToken);
        alert(`${response.nickname}님 환영합니다!`);
        navigate("/");
      } else {
        alert("로그인에 실패했습니다.");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-primary-color mb-6">로그인</h2>
        <AuthForm mode="login" onSubmit={handleLogin} />
      </div>
      <p className="text-gray-600">
        계정이 없으신가요?
        <Link to={"/signup"} className="text-primary-color hover:underline">
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default PageLogin;
