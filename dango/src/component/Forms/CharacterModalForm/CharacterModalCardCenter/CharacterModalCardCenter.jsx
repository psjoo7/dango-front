import React, { useState, useEffect } from "react";
import styles from "./CharacterModalCardCenter.module.css";
import CharacterImage from "../../../CharacterImage/CharacterImage";
import { RegularText } from "../../../Text";
import { RegularButton } from "../../../Buttons";

const CharacterModalCardCenter = ({
                                      propLeftTriangleOnClick, // 상위 컴포넌트에서 전달받은 함수
                                      propRightTriangleOnClick, // 상위 컴포넌트에서 전달받은 함수
                                      propButtonOnClick, // 버튼 클릭 시 상위 컴포넌트에서 전달받은 함수
                                      propCenterImageCode, // 상위 컴포넌트에서 전달받은 이미지 코드
                                  }) => {
    const [userNationality, setUserNationality] = useState("Japan");

    useEffect(() => {
        setUserNationality("Korea");
    }, []); // 컴포넌트가 처음 렌더링될 때만 실행

    return (
        <div className={styles.CharacterModalCardCenter}>
            <div className={styles.topTriangle}></div>

            <RegularText
                propText={
                    userNationality === "Korea" ? "캐릭터를 선택해 주세요." : "キャラクターを選んでください" // 한국어 또는 일본어로 동적 변경
                }
                propFontSize={userNationality === "Korea" ? "23px" : "19px"}
            />

            <div className={styles.mid}>
                <div
                    className={styles.leftTriangle}
                    onClick={propLeftTriangleOnClick} // 왼쪽 삼각형 클릭 시 상위 함수 호출
                ></div>

                <CharacterImage
                    propImageWidth={"113px"}
                    propImageHeight={"270px"}
                    propImageCode={propCenterImageCode} // 상위 컴포넌트에서 전달받은 이미지 코드 사용
                />

                <div
                    className={styles.rightTriangle}
                    onClick={propRightTriangleOnClick} // 오른쪽 삼각형 클릭 시 상위 함수 호출
                ></div>
            </div>

            <RegularButton
                propText={userNationality === "Korea" ? "선택" : "選択"} // 한국어 또는 일본어로 동적 변경
                propColor={"var(--color-dangoIvory)"}
                propWidth={"92px"}
                propHeight={"37px"}
                propFontSize={"15px"}
                propBorderRadius={"25px"}
                propBorder={"3px solid var(--color-black)"}
                propOnClick={propButtonOnClick} // 버튼 클릭 시 상위 함수 호출
            />
        </div>
    );
};

export default CharacterModalCardCenter;
