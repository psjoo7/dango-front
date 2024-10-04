import React from "react";
import PropTypes from "prop-types";
import ReviewList from "./ReviewList/ReviewList";
import styles from "./ReviewForm.module.css";
import WordListTop from "../../Word/WordListTop/WordListTop";
import Head from "../../Head/Head";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";

const ReviewForm = ({ propDay, propImageCode }) => {
    // 한 자리 숫자일 경우 앞에 0을 붙임
    const formattedDay = propDay < 10 ? `0${propDay}` : propDay;

    return (
        <div className={styles.ReviewForm}>
            <Head
                propLeftComponent={<NavigationMenu />}
                propMidComponent={
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/Head/LogoText.svg`}
                        alt="LogoText"
                    />
                }
            />

            <div className={styles.list}>
                <WordListTop propText2={formattedDay} propImageCode={propImageCode} /> {/* 변환된 값을 propText2로 전달 */}
                <ReviewList propElementCount={propDay} /> {/* 원래 값을 그대로 전달 */}
            </div>
        </div>
    );
};

ReviewForm.propTypes = {
    propDay: PropTypes.number.isRequired, // propDay는 필수
    propImageCode: PropTypes.string.isRequired, // propImageCode도 필수
};

export default ReviewForm;
