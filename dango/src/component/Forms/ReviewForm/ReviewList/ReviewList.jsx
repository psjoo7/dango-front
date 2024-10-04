import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './ReviewList.module.css';
import ReviewListElement from '../ReviewListElement/ReviewListElement';

const ReviewList = ({ propElementCount }) => {
    const navigate = useNavigate();  // 네비게이션을 위한 훅

    // 단어 클릭 시 /review/wordDay{day} 경로로 이동
    const handleWordClick = (day) => {
        navigate(`/review/wordDay${day}`);  // day 값을 경로에 추가
    };

    // 문법 클릭 시 /review/grammarDay{day} 경로로 이동
    const handleGrammarClick = (day) => {
        navigate(`/review/grammarDay${day}`);  // day 값을 경로에 추가
    };

    return (
        <div className={styles.list}>
            {Array.from({ length: propElementCount }, (_, index) => (
                <ReviewListElement
                    key={index}
                    propNumberText={(index + 1).toString()}  // 1부터 시작하는 숫자를 전달
                    onWordClick={() => handleWordClick(index + 1)}  // 단어 클릭 핸들러
                    onGrammarClick={() => handleGrammarClick(index + 1)}  // 문법 클릭 핸들러
                />
            ))}
        </div>
    );
};

ReviewList.propTypes = {
    propElementCount: PropTypes.number.isRequired,  // 리스트의 길이를 결정하는 숫자
};

export default ReviewList;
