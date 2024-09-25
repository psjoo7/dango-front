import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 임포트

const ProfileImage = ({
  propImageCode = "9_m", // 기본 이미지 파일명
  propAltText = "Profile Image", // 기본 alt 텍스트
  propImageWidth = "80px", // 기본 너비
  propImageHeight = "80px", // 기본 높이
  propNavigatePath = null, // 기본 네비게이션 경로, null일 경우 클릭 이벤트 없음
}) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleClick = () => {
    if (propNavigatePath) {
      // 경로가 '/'로 시작하지 않으면 '/'를 앞에 붙여 절대 경로로 만듦
      const absolutePath = propNavigatePath.startsWith("/")
        ? propNavigatePath
        : `/${propNavigatePath}`;
      navigate(absolutePath); // 절대 경로로 네비게이션
    }
  };

  const imageSrc = `${process.env.PUBLIC_URL}/assets/images/Profile/Profile${propImageCode}.svg`; // 파일명만 변경 가능

  return (
    <div>
      <img
        src={imageSrc}
        alt={propAltText}
        style={{
          width: propImageWidth,
          height: propImageHeight,
          cursor: propNavigatePath ? "pointer" : "default", // 경로가 있을 때만 클릭 가능한 커서 적용
        }}
        onClick={propNavigatePath ? handleClick : null} // 경로가 있을 때만 클릭 이벤트 핸들러 적용
      />
    </div>
  );
};

ProfileImage.propTypes = {
  propImageCode: PropTypes.string, // 이미지 파일명
  propAltText: PropTypes.string, // alt 텍스트
  propImageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 이미지 너비
  propImageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 이미지 높이
  propNavigatePath: PropTypes.string, // 네비게이션 경로
};

export default ProfileImage;
