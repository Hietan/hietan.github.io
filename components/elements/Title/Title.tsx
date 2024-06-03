import type { ReactNode } from 'react';
import styles from "./Title.module.css"

type Props = {
	children?: ReactNode;
}

export default function Title(props: Props) {
	return (
		<h2 className={styles.title}>{props.children}</h2>
	);
}
