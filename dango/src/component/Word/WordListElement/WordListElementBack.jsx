import PropTypes from 'prop-types';
import styles from './WordListElementBack.module.css';
import DynamicText from '../../Text/DynamicText/DynamicText';

const WordListElementBack = ({
                                 propBackNumber = '01',
                                 propBackHanja = '日本',
                                 className = '',
                             }) => {
    return (
        <div className={`${styles.wordListElementBack} ${className}`}>
            <div className={styles.number}>
                <DynamicText propText={propBackNumber} propMaxFontSize={42} propMinFontSize={25} />
            </div>

            <div className={styles.wordElement}>
                <DynamicText propText={propBackHanja} propMaxFontSize={42} propMinFontSize={25} />
            </div>

            <div className={styles.wordElement}></div>

            <div className={styles.wordElement}></div>
        </div>
    );
};

WordListElementBack.propTypes = {
    propBackNumber: PropTypes.string,
    propBackHanja: PropTypes.string,
    className: PropTypes.string,
};

export default WordListElementBack;
