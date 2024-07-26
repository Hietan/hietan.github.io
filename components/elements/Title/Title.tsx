import type { ReactNode } from 'react';
import styles from "./Title.module.scss"

type Props = {
	children?: ReactNode;
}

export default function Title(props: Props) {
	return (
		<div className={styles.titleWrapper}>
			<h2 className={styles.title}>{props.children}</h2>
		</div>
	);
}
