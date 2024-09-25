import React from "react";
import PropTypes from "prop-types";
import styles from "./Head.module.css";

const Head = ({
                  propLeftComponent = null,   // left 영역에 들어갈 컴포넌트 (없을 수도 있음)
                  propMidComponent = null,    // mid 영역에 들어갈 컴포넌트 또는 이미지 (없을 수도 있음)
                  propRightComponent1 = null, // right 영역에 들어갈 첫 번째 컴포넌트 (없을 수도 있음)
                  propRightComponent2 = null, // right 영역에 들어갈 두 번째 컴포넌트 (없을 수도 있음)
                  propRightComponent3 = null  // right 영역에 들어갈 세 번째 컴포넌트 (새로 추가)
              }) => {
    return (
        <div className={styles.headContainer}>
            {/* Left 구역 */}
            <div className={styles.left}>
                {propLeftComponent}
            </div>

            {/* Mid 구역 */}
            <div className={styles.mid}>
                {propMidComponent}
            </div>

            {/* Right 구역 */}
            <div className={styles.right}>
                {propRightComponent1}
                {propRightComponent2}
                {propRightComponent3}  {/* 세 번째 컴포넌트 추가 */}
            </div>
        </div>
    );
};

Head.propTypes = {
    propLeftComponent: PropTypes.element,   // left 영역에 들어갈 컴포넌트
    propMidComponent: PropTypes.oneOfType([
        PropTypes.element,              // mid에 컴포넌트가 들어가는 경우
        PropTypes.string                // 이미지 URL로 사용될 수도 있음
    ]),
    propRightComponent1: PropTypes.element, // right 영역에 들어갈 첫 번째 컴포넌트
    propRightComponent2: PropTypes.element, // right 영역에 들어갈 두 번째 컴포넌트
    propRightComponent3: PropTypes.element  // right 영역에 들어갈 세 번째 컴포넌트
};

export default Head;
