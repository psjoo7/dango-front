import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트

const CharacterImage = ({
                            propImageCode = "9_m",  // 기본 이미지 파일명
                            propAltText = "Profile Image",  // 기본 alt 텍스트
                            propImageWidth,  // 기본 너비
                            propImageHeight,  // 기본 높이
                            propNavigatePath = null,  // 기본 네비게이션 경로, null일 경우 클릭 이벤트 없음
                            className = ""  // 동적으로 클래스명을 받기 위한 prop, 기본값은 빈 문자열
                        }) => {
    const navigate = useNavigate();  // useNavigate 훅 사용

    const handleClick = () => {
        if (propNavigatePath) {
            navigate(propNavigatePath);  // propNavigatePath가 있을 때만 경로로 이동
        }
    };

    const imageSrc = `${process.env.PUBLIC_URL}/assets/images/Character/Profile${propImageCode}.svg`;  // 파일명만 변경 가능

    return (
        <div className={className}> {/* 상위 컴포넌트로부터 받은 className 적용 */}
            <img
                src={imageSrc}
                alt={propAltText}
                style={{
                    width: propImageWidth,
                    height: propImageHeight,
                    cursor: propNavigatePath ? "pointer" : "default"  // 경로가 있을 때만 클릭 가능한 커서 적용
                }}
                onClick={propNavigatePath ? handleClick : null}  // 경로가 있을 때만 클릭 이벤트 핸들러 적용
            />
        </div>
    );
};

CharacterImage.propTypes = {
    propImageCode: PropTypes.string,  // 이미지 파일명
    propAltText: PropTypes.string,  // alt 텍스트
    propImageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // 이미지 너비
    propImageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // 이미지 높이
    propNavigatePath: PropTypes.string,  // 네비게이션 경로
    className: PropTypes.string,  // 동적 클래스를 받는 prop
};

export default CharacterImage;
