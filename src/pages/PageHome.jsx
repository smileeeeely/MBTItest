import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserLoginContext } from "../provider/UserLoginProvider";
import PageLogin from "./PageLogin";
import PageTest from "./PageTest";

const PageHome = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(UserLoginContext);

  const navigateToTestOrLogin = () => {
    isLogin
      ? navigate("/test")
      : (alert("로그인을 먼저 해주세요"), navigate("/login"));
  };

  return (
    <>
      <h1>무료 성격 테스트</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <div>
        성격 유형 검사
        <p>
          자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
          알아보세요.
        </p>
      </div>
      <div>
        성격 유형 이해
        <p>다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.</p>
      </div>
      <div>
        팀 평가
        <p>
          팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
          배워보세요.
        </p>
      </div>
      <button onClick={() => navigateToTestOrLogin()}>
        내 성격 알아보러 가기
      </button>
    </>
  );
};

export default PageHome;
