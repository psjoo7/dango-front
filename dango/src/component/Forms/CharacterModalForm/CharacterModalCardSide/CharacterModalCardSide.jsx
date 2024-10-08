import React, { useState, useEffect } from "react";
import styles from "./CharacterModalCardSide.module.css";
import CharacterImage from "../../../CharacterImage/CharacterImage";
import { RegularText } from "../../../Text";

const CharacterModalCardSide = ({
                                    propCharacterName = "캐릭터 이름", // 상위 컴포넌트에서 캐릭터 이름을 전달받음
                                    propCharacterImageCode = "2_w", // 상위 컴포넌트에서 캐릭터 이미지 코드를 전달받음
                                    propIsCharacter = true, // 상위 컴포넌트에서 캐릭터가 있는지 여부를 전달받음
                                }) => {
    const [userNationality, setUserNationality] = useState("Japan");

    useEffect(() => {
        setUserNationality("Korea");
    }, []); // 컴포넌트가 처음 렌더링될 때만 실행

    return (
        <div className={styles.CharacterModalCardSide}>
            <RegularText
                propText={propCharacterName} // 캐릭터 이름 출력
                propFontSize={"23px"}
            />

            <div className={styles.mid}>
                {propIsCharacter ? (
                    <CharacterImage
                        propImageWidth={"113px"}
                        propImageHeight={"270px"}
                        propImageCode={propCharacterImageCode}
                    />
                ) : null /* 캐릭터가 없으면 이미지를 렌더링하지 않음 */}
            </div>

            <RegularText
                propText={
                    userNationality === "Korea"
                        ? "캐릭터가 없습니다."
                        : "キャラクターがいません" // 한국어 또는 일본어로 동적 변경
                }
                propFontSize={userNationality === "Korea"? "28px":"24px"}
                propClassName={`${styles.noText} ${
                    propIsCharacter ? styles.hidden : styles.visible
                }`} // 조건부로 CSS 클래스 적용
            />
        </div>
    );
};

export default CharacterModalCardSide;
