import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 사용
import styles from "./ProfileImage.module.css";

const ProfileImage = ({
                          propImageCode = "9_m",  // 기본 이미지 파일명
                          propAltText = "Profile Image",  // 기본 alt 텍스트
                          propImageWidth = "80px",  // 기본 너비
                          propImageHeight = "80px",  // 기본 높이
                          propNavigatePath = null,  // 네비게이션 경로
                          propOnImageClick = null,  // 이미지 클릭 시 실행될 함수 (모달 열기 등)
                      }) => {
    const navigate = useNavigate();  // useNavigate 훅 사용

    const handleClick = () => {
        // 이미지 클릭 시 모달 열기 및 네비게이션 모두 처리
        if (propOnImageClick) {
            propOnImageClick();  // 모달 열기 (또는 다른 기능)
        }
        if (propNavigatePath) {
            // 네비게이션 경로가 있는 경우 이동 처리
            const absolutePath = propNavigatePath.startsWith("/") ? propNavigatePath : `/${propNavigatePath}`;
            navigate(absolutePath);  // 네비게이션 실행
        }
    };

    const imageSrc = `${process.env.PUBLIC_URL}/assets/images/Profile/Profile${propImageCode}.svg`;  // 이미지 경로

    return (
        <div>
            <img
                src={imageSrc}
                alt={propAltText}
                style={{
                    width: propImageWidth,
                    height: propImageHeight,
                    cursor: (propNavigatePath || propOnImageClick) ? "pointer" : "default",  // 클릭 가능할 때만 커서 변경
                }}
                onClick={(propNavigatePath || propOnImageClick) ? handleClick : null}  // 클릭 이벤트 핸들러 적용
            />
        </div>
    );
};

ProfileImage.propTypes = {
    propImageCode: PropTypes.string,  // 이미지 파일명
    propAltText: PropTypes.string,  // alt 텍스트
    propImageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // 이미지 너비
    propImageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // 이미지 높이
    propNavigatePath: PropTypes.string,  // 네비게이션 경로
    propOnImageClick: PropTypes.func,  // 클릭 시 실행될 함수 (모달 열기 등)
};

export default ProfileImage;
