import React, { useState } from "react";
import ReviewForm from "../../component/Forms/ReviewForm/ReviewForm";

const ReviewPage = () => {
    const fetchedNumber = 15; // 백엔드에서 받아온 숫자
    const [count, setCount] = useState(fetchedNumber); // 백엔드에서 받아온 숫자를 상태로 설정

    return (
        <ReviewForm propDay={count} propImageCode={"2_m"} />
);
};

export default ReviewPage;
