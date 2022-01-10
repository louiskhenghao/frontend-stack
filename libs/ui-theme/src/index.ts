import { create } from 'tailwind-rn';
import styles from '../styles.json';

const { tailwind: tw, getColor } = create(styles);

export { tw, getColor };

export default { tw, getColor };
