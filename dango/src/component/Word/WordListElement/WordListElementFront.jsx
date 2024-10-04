import PropTypes from 'prop-types';
import styles from './WordListElementFront.module.css';
import DynamicText from '../../Text/DynamicText/DynamicText';

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
                <DynamicText propText={propFrontNumber} propMaxFontSize={42} propMinFontSize={25} />
            </div>

            <div className={styles.wordElement}>
                <DynamicText propText={propFrontHanja} propMaxFontSize={42} propMinFontSize={25} />
            </div>

            <div className={styles.wordElement}>
                <DynamicText propText={propFrontReading} propMaxFontSize={42} propMinFontSize={25} />
            </div>

            <div className={styles.wordElement}>
                <DynamicText propText={propFrontMeaning} propMaxFontSize={42} propMinFontSize={25} />
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
