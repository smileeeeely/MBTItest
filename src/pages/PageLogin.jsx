import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { useContext } from "react";
import { UserLoginContext } from "../provider/UserLoginProvider";

const PageLogin = () => {
  const navigate = useNavigate();
  const { setIsLogin, setUser } = useContext(UserLoginContext);
  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      alert("로그인에 성공했습니다. 테스트페이지로 이동합니다.");
      setUser(response);
      setIsLogin(true);
      navigate("/test");
    } catch (error) {
      console.log("error", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <div>
      <div>
        <h2>로그인</h2>
        <AuthForm mode="login" onSubmit={handleLogin} />
      </div>
      <p>
        계정이 없으신가요?
        <Link to={"/signup"}>회원가입</Link>
      </p>
    </div>
  );
};

export default PageLogin;
