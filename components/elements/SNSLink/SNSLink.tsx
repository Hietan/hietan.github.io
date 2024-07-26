import Image from 'next/image';
import Link from 'next/link';

import styles from "./SNSLink.module.scss"

type Props = {
	href: string,
	img: string,
	serviceName: string,
	accountName: string
}

export default function SNSLink(props: Props) {
	return (
		<Link
			className={styles.wrapper}
			href={props.href}
			target="_blank"
		>
			<div className={styles.imageWrapper}>
				<Image
					className={styles.image}
					src={props.img}
					width={100}
					height={100}
					alt={`Logo of ${props.serviceName}`}
				/>
			</div>
			<div className={styles.textWrapper}>
				<div className={styles.serviceName}>
					{props.serviceName}
				</div>
				<div className={styles.accountName}>
					<span className={styles.at}>@</span>
					{props.accountName}
				</div>
			</div>
		</Link>
	);
}
