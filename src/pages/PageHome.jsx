import { useNavigate } from "react-router-dom";

const PageHome = () => {
  const navigate = useNavigate();

  const navigateToTestOrLogin = () => {
    navigate("/test");
  };

  return (
    <div className="h-full items-center bg-gray-100 flex flex-col justify-between">
      <h1 className="text-5xl font-bold text-primary-color mb-6">
        무료 성격 테스트
      </h1>
      <p className="mb-8 text-lg text-secondary-color">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6">
          성격 유형 검사
          <div className="text-gray-600">
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          성격 유형 이해
          <div className="text-gray-600">
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          팀 평가
          <div className="text-gray-600">
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </div>
        </div>
      </div>
      <button
        className="inline-block bg-primary-color p-4 py-2 px-6 rounded-full hover:bg-secondary-color transition mb-4 hover:text-gray-300"
        type="button"
        onClick={navigateToTestOrLogin}
      >
        내 성격 알아보러 가기
      </button>
    </div>
  );
};

export default PageHome;
