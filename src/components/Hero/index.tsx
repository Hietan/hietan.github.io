import styles from "./index.module.scss";

type Props = {
	title: string;
}

export default function Hero({ title }: Props) {
	return (
		<div className={styles.wrapper}>
				<h1 className={styles.title}>{title}</h1>
		</div>
	);
}
