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
    <div>
      <div>
        <h2>프로필 수정</h2>
        <form onSubmit={updateNickname}>
          <span>
            닉네임
            <input
              type="text"
              value={newNickname}
              onChange={handleChange}
              required
              placeholder={oldNickname}
            />
          </span>
          <button>프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default PageProfile;
