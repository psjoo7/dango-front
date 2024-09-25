import { useState } from "react";
import styles from "./InCard1.module.css";
import Button from "../../../../component/Buttons/RegularButton/RegularButton";
import HomeCard1Rate from "../HomeCard1Rate/HomeCard1Rate";

const InCard1 = () => {
  // hover 상태를 관리하기 위한 상태
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.homeInCard}
      onMouseEnter={() => setIsHovered(true)} // 마우스가 카드 위로 올라가면 hover 상태 활성화
      onMouseLeave={() => setIsHovered(false)} // 마우스가 카드에서 벗어나면 hover 상태 비활성화
    >
      {/* hover 상태에 따라 다른 SVG 렌더링 */}
      {isHovered ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/HomePage/HomePageCharacter1_w.svg`}
          className={styles.characterSVG}
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/HomePage/HomePageCharacterDango1_w.svg`}
          className={styles.characterSVG}
        />
      )}

      <Button
        propText={"단어"}
        propColor="var(--color-damgoIvory)"
        propTextColor={"var(--color-black)"}
        propWidth={"100px"}
        propHeight={"40px"}
        propBorder={"3px solid var(--color-black)"}
        propBorderRadius={"20px"}
        propHoverColor={"var(--color-black)"}
        propHoverTextColor={"var(--color-white)"}
        propHover={true}
      />

      <div className={styles.rate}>
        <HomeCard1Rate />
      </div>
    </div>
  );
};

export default InCard1;
