import { PrimaryColor } from '../../configs/colors.config';
import styles from "../../styles/component/spinner.module.css"
import { Box } from './box.component';

interface IProps {
    size?: number | 'small' | 'large';
    color?: string;
}

export const Spinner: React.FC<IProps> = ({ size = 'large', color = PrimaryColor.CD }) => {
    return (
        <Box className={styles.spinner} style={{
            width: size === "small" ? "15px" : size === "large" ? "25px" : `${size}px`,
            height: size === "small" ? "15px" : size === "large" ? "25px" : `${size}px`,
            borderLeft: `3px solid ${color}`,
            borderRight: `3px solid ${color}`
        }}></Box>
    );
};
