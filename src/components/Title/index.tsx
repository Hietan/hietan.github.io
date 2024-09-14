import styles from "./index.module.scss";

type Props = {
	title: string;
}

export default function Hero({ title }: Props) {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{title}</h2>
		</div>
	);
}
