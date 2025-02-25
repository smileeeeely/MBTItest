import { useEffect, useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";

const PageProfile = () => {
  const token = localStorage.getItem("accessToken");
  const [newNickname, setNewNickname] = useState("");
  const [oldNickname, setOldNickname] = useState("");

  useEffect(() => {
    const fetchOldNickname = async () => {
      try {
        const oldProfile = await getUserProfile(token);
        setOldNickname(oldProfile.nickname);
      } catch (error) {
        console.error("닉네임 가져오기 실패", error);
      }
    };

    fetchOldNickname();
  }, [token]);

  const handleChange = (e) => {
    e.preventDefault();
    setNewNickname(e.target.value);
  };

  const updateNickname = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nickname", newNickname);

      const response = await updateProfile(formData, token);
      if (response.success) {
        alert("닉네임 업데이트 성공");
        const updatedProfile = await getUserProfile(token);
        setOldNickname(updatedProfile.nickname);
        setNewNickname("");
      }
    } catch (error) {
      console.log("error", error);
      alert("닉네임 변경에 실패했습니다.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-primary-color mb-6">
          프로필 수정
        </h2>
        <form onSubmit={updateNickname}>
          <span>
            닉네임
            <input
              type="text"
              value={newNickname}
              onChange={handleChange}
              required
              placeholder={oldNickname}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </span>
          <button className="w-full bg-primary-color p-4 rounded-lg hover:bg-secondary-color trasition duration-300 hover:text-gray-300">
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default PageProfile;
