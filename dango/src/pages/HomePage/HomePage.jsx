import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import SideBar from "../../component/SideBar/SideBar";
import HomeCard1 from "./HomeCard1/HomeCard1";
import HomeCard2 from "./HomeCard2/HomeCard2";
import HomeCard4 from "./HomeCard4/HomeCard4";
import HomeSideCard1 from "./HomeSideCard1/HomeSideCard1";
import HomeSideCard2 from "./HomeSideCard2/HomeSideCard2";
import OmikujiModalForm from "../../component/Forms/OmikujiModalForm/OmikujiModalForm";
import HomeCalendar from "../../component/HomeCalendar/HomeCalendar"; // Omikuji 모달 불러오기
import axios from "axios";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [attendedDate, setAttendedDate] = useState([]);
  // const [omikujiList, setOmikujiList] = useState([]); // 오미쿠지 리스트 상태 관리

  // // 오미쿠지 리스트 예시 데이터
  // const omikujiListGet = [{
  //         title: "안녕",
  //         content: "안녕하세요"
  //     }];

  // const propIsAttendanceList = [
  //   { date: "2024-10-01", isAttended: true }, // 출근
  //   { date: "2024-10-02", isAttended: false }, // 미출근
  //   { date: "2024-10-03", isAttended: true }, // 출근
  //   { date: "2024-10-04", isAttended: true }, // 출근
  //   { date: "2024-10-05", isAttended: true }, // 출근
  // ];
  const fetchAttedanceDate = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      const response = await axios.post(
        "http://localhost:8888/api/study/studyReview",
        { userId: userInfo.userId }
      );
      // response.data 배열을 가공하여 propIsAttendanceList 형태로 변환
      const propIsAttendanceList = response.data.map((date) => ({
        date: date, // 날짜는 그대로 사용
        isAttended: true, // 출근 여부는 true로 고정
      }));
      setAttendedDate(propIsAttendanceList);
    } catch (error) {
      console.log("attendanceDate error : ", error);
    }
  };
  useEffect(() => {
    fetchAttedanceDate();
  }, []);
  // 모달 열기 함수
  const openModal = () => {
    // setOmikujiList(omikujiListGet); // 오미쿠지 리스트 설정
    setIsModalOpen(true); // 모달을 열기 위해 상태를 true로 설정
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false); // 모달을 닫기 위해 상태를 false로 설정
  };

  return (
    <div className={styles.homePage}>
      <SideBar />

      <div className={styles.contents}>
        <div className={styles.top}>
          <HomeCard1 />
          <HomeCard2 />
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomMainCard}>
            <div className={styles.homeCard3}>
              {/* propIsAttendanceList를 HomeCalendar에 전달 */}
              <HomeCalendar isAttendanceList={attendedDate} />
            </div>

            <HomeCard4 />
          </div>

          <div className={styles.sideCard}>
            <HomeSideCard1 />
            <HomeSideCard2
              propOnCardClick={openModal} // 모달 열기 함수 전달
            />
          </div>
        </div>
      </div>

      {/* 모달 창 */}
      {isModalOpen && (
        <OmikujiModalForm
          propOnClose={closeModal} // 모달 닫기 함수 전달
          //   propTextTitle={omikujiList[0]?.title} // 리스트의 첫 번째 항목 제목 전달
          //   propTextContent={omikujiList[0]?.content} // 리스트의 첫 번째 항목 내용 전달
        />
      )}
    </div>
  );
};

export default HomePage;
