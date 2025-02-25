import { useContext } from "react";
import { UserLoginContext } from "../provider/UserLoginProvider";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const Result = ({ resultData }) => {
  const { user } = useContext(UserLoginContext);

  const deleteHandler = async () => {
    await deleteTestResult(resultData.id);
  };

  const updateVisibility = async () => {
    await updateTestResultVisibility(resultData.id, !resultData.visibility);
  };

  return (
    <div className="max-w-xl bg-slate-500 p-5 mb-5">
      <div className="flex justify-between">
        <span className="text-white">{user.nickname}</span>
        <span className="text-slate-400">{resultData.date}</span>
      </div>
      <hr className="mb-5 mt-5 border-slate-400" />
      <h1 className="font-bold text-2xl text-blue-900 mb-3">
        {resultData.result}
      </h1>
      <p className="text-white mb-5">
        {mbtiDescriptions[resultData.result] ||
          "해당 성격 유형에 대한 설명이 없습니다."}
      </p>
      {resultData.userId === user.userId ? (
        <div className="flex justify-end">
          <button
            className="p-2 bg-blue-400 mr-3 rounded-lg text-white"
            onClick={updateVisibility}
          >
            {resultData.visibility ? "공개로 전환" : "비공개로 전환"}
          </button>
          <button
            className="p-2 bg-red-400 rounded-lg text-white"
            onClick={deleteHandler}
          >
            삭제
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Result;
