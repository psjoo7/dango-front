import React from 'react';
import { PieChart, Pie, Cell } from 'recharts'; // Recharts의 차트 컴포넌트 임포트

// 각 데이터 그룹에 대응하는 색상 배열
const outerColors = ['#D9D9D9', '#F9D67B']; // 첫 번째 도넛의 색상

const DonutChart = ({
                                 propNonProgress,
                                 propProgress
                             }) => {
    // outerData를 props로 전달받은 값으로 업데이트
    const outerData = [
        { name: 'Non-Progress', value: propNonProgress },
        { name: 'Progress', value: propProgress }
    ];

    return (
        <>
            {/* SVG 필터를 사용하여 그림자 추가 */}
            <svg width="0" height="0">
                <defs>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="rgba(0, 0, 0, 0.3)" />
                    </filter>
                </defs>
            </svg>

            <PieChart width={270} height={270}> {/* 차트 크기 설정 */}
                {/* 첫 번째 외부 도넛 차트 */}
                <Pie
                    data={outerData} // 외부 데이터 배열
                    innerRadius={107} // 도넛 차트 내부 반지름
                    outerRadius={125} // 도넛 차트 외부 반지름
                    fill="#8884d8" // 기본 채우기 색상
                    paddingAngle={3} // 각 섹션 사이의 간격
                    dataKey="value" // 데이터에서 사용할 키
                    cornerRadius={10} // 각 섹션 끝부분에 라운드 적용
                    stroke="none" // 외곽선을 없앰
                >
                    {/* 데이터의 각 항목마다 색상을 적용 */}
                    {outerData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`} // 고유한 키 설정
                            fill={outerColors[index % outerColors.length]} // outerColors 배열에서 색상을 순서대로 적용
                            style={{ filter: 'url(#shadow)' }} // 그림자 효과 적용
                        />
                    ))}
                </Pie>
            </PieChart>
        </>
    );
};

export default DonutChart;