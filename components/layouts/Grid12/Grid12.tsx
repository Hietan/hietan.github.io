import type { ReactNode } from 'react';
import styles from "./Grid12.module.scss"

type Props = {
	children?: ReactNode;
}

export default function Grid12(props: Props) {
	return (
		<div className={styles.grid}>
            {props.children}
		</div>
	);
}
