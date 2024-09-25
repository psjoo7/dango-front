import PropTypes from 'prop-types';
import styles from './WordListElementFront.module.css';
import { RegularText } from '../../Text';

const WordListElementFront = ({
                                  propFrontNumber = '01',
                                  propFrontHanja = '日本',
                                  propFrontReading = 'にほん',
                                  propFrontMeaning = '일본',
                                  className = '',
                              }) => {
    return (
        <div className={`${styles.wordListElementFront} ${className}`}>
            <div className={styles.number}>
                <RegularText propText={propFrontNumber} propFontSize="42px" />
            </div>

            <div className={styles.wordElement}>
                <RegularText propText={propFrontHanja} propFontSize="42px" />
            </div>

            <div className={styles.wordElement}>
                <RegularText propText={propFrontReading} propFontSize="42px" />
            </div>

            <div className={styles.wordElement}>
                <RegularText propText={propFrontMeaning} propFontSize="42px" />
            </div>
        </div>
    );
};

WordListElementFront.propTypes = {
    propFrontNumber: PropTypes.string,
    propFrontHanja: PropTypes.string,
    propFrontReading: PropTypes.string,
    propFrontMeaning: PropTypes.string,
    className: PropTypes.string,
};

export default WordListElementFront;
