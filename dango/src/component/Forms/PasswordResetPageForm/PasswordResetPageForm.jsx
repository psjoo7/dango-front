import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./PasswordResetPageForm.module.css";
import { RegularText, DoubleText } from "../../Text";
import InputText from "../../Input/InputText/InputText";
import { RegularButton } from "../../Buttons";
import axios from 'axios'; // axios 임포트

const PasswordResetPageForm = ({ propUserName, propClassName = "" }) => {
    const [password, setPassword] = useState(""); // 비밀번호 상태
    const [showWarning, setShowWarning] = useState(false); // 경고 메시지 표시 여부
    const [showModal, setShowModal] = useState(false); // 모달 창 표시 여부

    // 비밀번호 유효성 검사 함수
    const isPasswordValid = (password) => {
        const passwordRegex = /^[A-Za-z0-9]{6,12}$/; // 영어와 숫자로만 이루어진 6자 이상 12자 이하
        return passwordRegex.test(password);
    };

    // 폼 제출 시 처리 함수
    const handleSubmit = async (event) => {
        event.preventDefault(); // 기본 폼 제출 방지

        // 비밀번호 유효성 검사
        if (!isPasswordValid(password)) {
            setShowWarning(true); // 조건을 만족하지 않으면 경고 메시지 표시
            return; // 비밀번호가 유효하지 않으면 폼을 제출하지 않음
        }

        setShowWarning(false); // 경고 메시지 숨김

        // 전송할 데이터 준비
        const formData = {
            username: propUserName,  // 닉네임도 함께 전송
            password: password
        };

        try {
            // axios로 서버에 데이터 전송
            const response = await axios.post("/api/password-reset", formData);
            console.log("비밀번호 변경 성공:", response.data);
            setShowModal(true); // 성공하면 모달 창 띄우기
        } catch (error) {
            console.error("비밀번호 변경 실패:", error.response ? error.response.data : error.message);
        }
    };

    // 모달 창 닫기 함수
    const handleCloseModal = () => {
        setShowModal(false); // 모달 창 닫기
    };

    return (
        <form className={styles.PasswordResetPageForm} onSubmit={handleSubmit}>
            <div className={styles.texts}>
                <RegularText
                    propText="비밀번호 재설정"       // text -> propText로 변경
                    propFontSize="60px"
                />
                <DoubleText
                    propText1={"닉네임:"}           // text1 -> propText1, text2 -> propText2로 변경
                    propText2={propUserName}  // 유저 닉네임을 prop으로 받아 표시
                    propText1Color={"var(--color-gray2)"}
                    propText2Color={"var(--color-gray2)"}
                    propText1FontWeight={500}
                    propText2FontWeight={500}
                    propText1FontSize={"var(--font-title1)"}
                    propText2FontSize={"var(--font-title1)"}
                />
            </div>

            <div className={styles.input}>
                <InputText
                    propLabelText={"Password"}
                    propLabelFontSize={"var(--font-title1)"}
                    propLabelFontWeight={500}
                    propWidth={"550px"}
                    propHeight={"60px"}
                    propBorderRadius={"15px"}
                    propPlaceholder={"새로운 비밀번호를 입력하세요."}
                    propLabelPadding={"0 0 5px"}
                    propValue={password}  // 비밀번호 상태 관리
                    propOnChange={(e) => setPassword(e.target.value)}  // 비밀번호 입력 시 상태 업데이트
                />

                {/* 경고 메시지: 유효성 검사를 통과하지 못하면 보임 */}
                {showWarning && (
                    <RegularText
                        propText={"비밀번호는 6자 이상 12자 이하의 영어와 숫자로만 설정해 주세요."}  // text -> propText로 변경
                        propFontSize={"var(--font-body2)"}
                        propFontWeight={700}
                        propColor={"var(--color-tomato)"}
                        propClassName={styles.warningText} // className -> propClassName으로 변경
                    />
                )}
            </div>

            <div className={styles.button}>
                <RegularButton
                    propWidth={"300px"}              // button -> prop으로 변경
                    propHeight={"58px"}
                    propBorderRadius={"15px"}
                    propText="저장"                  // buttonText -> propText로 변경
                    propColor={"var(--color-black)"}
                    propTextColor={"var(--color-white)"}
                    propFontSize={"var(--font-title2)"}
                    propFontWeight={"700"}
                    propType="submit"  // 버튼 타입을 'submit'으로 설정
                />
            </div>

            {/* 모달 창 */}
            {showModal && (
                <div className={styles.modal} onClick={handleCloseModal}>
                    <div className={styles.modalContent}>
                        <RegularText
                            propText={"비밀번호가 변경되었습니다."}  // text -> propText로 변경
                            propFontSize={"30px"}
                            propFontWeight={700}
                        />

                        <RegularButton
                            propWidth={"180px"}          // button -> prop으로 변경
                            propHeight={"60px"}
                            propText="확인"
                            propColor={"var(--color-black)"}
                            propTextColor={"var(--color-white)"}
                            propFontSize={"var(--font-title2)"}
                            onClick={handleCloseModal} // 확인 버튼 클릭 시 모달 닫기
                        />
                    </div>
                </div>
            )}
        </form>
    );
};

PasswordResetPageForm.propTypes = {
    propUserName: PropTypes.string.isRequired, // 유저 닉네임을 prop으로 받음
    propClassName: PropTypes.string,           // className -> propClassName으로 변경
};

export default PasswordResetPageForm;
