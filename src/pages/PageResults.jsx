import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResults";
import Result from "../components/Result";

const PageResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getTestData = async () => {
      const data = await getTestResults();
      setResults(data);
    };
    getTestData();
  }, [results]);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-5xl font-bold text-primary-color mb-6">
        MBTI 테스트 결과
      </h2>
      {results.map((result) => (
        <Result key={result.date} resultData={result} />
      ))}
    </div>
  );
};

export default PageResults;
