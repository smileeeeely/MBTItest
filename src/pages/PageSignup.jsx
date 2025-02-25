import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";

const PageSignup = () => {
  const navigate = useNavigate();
  const handleSignup = async (formData) => {
    try {
      await register(formData);
      alert("회원가입에 성공했습니다. 로그인페이지로 이동합니다.");
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-primary-color mb-6">회원가입</h2>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p className="text-gray-600">
            이미 계정이 있으신가요?
            <Link to={"/login"} className="text-primary-color hover:underline">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageSignup;
