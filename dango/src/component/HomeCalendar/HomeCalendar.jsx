import React, { useState, useEffect } from 'react';
import styles from './HomeCalendar.module.css';

function HomeCalendar({ isAttendanceList }) {
    const [currentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    // 색상 배열, 달성 횟수에 따른 반복 색상 설정
    const achievementColors = [
        'var(--color-dangoIvory)',
        'var(--color-dangoPink)',
        'var(--color-dangoGreen)',
    ];

    // 해당 날짜에 달성한 원 색상을 결정하는 함수
    const getAchievementColor = (index) => {
        return achievementColors[index % achievementColors.length];
    };

    // 해당 월의 첫 번째 날과 마지막 날 계산
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    // 첫 번째 주의 첫 날이 월요일이 되도록 조정
    const firstDayOfWeek = firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    // 1일부터 마지막 날짜까지 배열 생성
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // 달성 여부에 따라 색상 순환을 추적하기 위한 변수
    let achievementCount = 0;

    // 날짜 선택 핸들러
    const handleDateClick = (day) => {
        setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    };

    return (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarHeader}>
                <span className={styles.calendarMonth}>
                    {currentDate.toLocaleString('en-US', { month: 'long' })}
                </span>
                <span className={styles.calendarYear}>
                    {currentDate.getFullYear()}
                </span>
            </div>

            <div className={styles.calendarGrid}>
                {/* 요일 헤더 */}
                <div className={styles.calendarDay}>Mon</div>
                <div className={styles.calendarDay}>Tue</div>
                <div className={styles.calendarDay}>Wed</div>
                <div className={styles.calendarDay}>Thu</div>
                <div className={styles.calendarDay}>Fri</div>
                <div className={styles.calendarDay}>Sat</div>
                <div className={styles.calendarDay}>Sun</div>

                {/* 빈 칸 생성 (첫 주의 첫 날 위치를 맞추기 위해) */}
                {Array.from({ length: firstDayOfWeek - 1 }).map((_, i) => (
                    <div key={i} className={styles.calendarEmpty}></div>
                ))}

                {/* 날짜 생성 */}
                {daysArray.map((day) => {
                    const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                    const isToday = currentDay.toDateString() === new Date().toDateString();
                    const isSelected = selectedDate && currentDay.toDateString() === selectedDate.toDateString();

                    // IsAttendanceList에서 현재 날짜에 해당하는 데이터 찾기
                    const attendance = isAttendanceList.find(item => {
                        return new Date(item.date).toDateString() === currentDay.toDateString();
                    });

                    const isPast = currentDay < new Date();
                    const isAttended = attendance && attendance.isAttended;

                    // 달성했으면 색상을 순환하면서 적용
                    let circleColor = null;
                    if (isAttended) {
                        circleColor = getAchievementColor(achievementCount);
                        achievementCount += 1; // 달성 횟수 증가
                    }

                    return (
                        <div
                            key={day}
                            className={`${styles.calendarDate} ${ !isToday && isPast && !isAttended ? styles.pastDate : ''}`}
                            onClick={() => handleDateClick(day)}
                        >
                            {/* 선택된 날짜는 검은색 원과 흰색 텍스트 */}
                            {isSelected && (
                                <div className={styles.selectedCircle}></div>
                            )}

                            {/* 오늘 날짜에 원 추가 */}
                            {isToday && !isSelected && (
                                <div className={styles.todayCircle}></div>
                            )}

                            {/* 달성한 날에 원 추가 */}
                            {!isSelected && isAttended && (
                                <div
                                    className={styles.attendedCircle}
                                    style={{ backgroundColor: circleColor }}
                                ></div>
                            )}

                            {/* 오늘 날짜 텍스트는 검은색 */}
                            {isToday && !isSelected && (
                                <span className={styles.todayText}>{day}</span>
                            )}

                            {/* 선택된 날짜는 흰색 텍스트 */}
                            {isSelected && (
                                <span className={styles.selectedText}>{day}</span>
                            )}

                            {/* 아무 조건에도 해당되지 않는 일반 날짜 */}
                            {!isToday && !isSelected && (
                                <span>{day}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HomeCalendar;
