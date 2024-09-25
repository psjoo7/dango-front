import PropTypes from 'prop-types';
import styles from './WordListElementBack.module.css';
import { RegularText } from '../../Text';

const WordListElementBack = ({
                                 propBackNumber = '01',
                                 propBackHanja = '日本',
                                 className = '',
                             }) => {
    return (
        <div className={`${styles.wordListElementBack} ${className}`}>
            <div className={styles.number}>
                <RegularText propText={propBackNumber} propFontSize="42px" />
            </div>

            <div className={styles.wordElement}>
                <RegularText propText={propBackHanja} propFontSize="42px" />
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
