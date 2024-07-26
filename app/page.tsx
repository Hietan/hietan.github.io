import styles from "./page.module.scss";

import Title from "@/components/elements/Title/Title"
import SNSLink from "@/components/elements/SNSLink/SNSLink"

export default function Home() {
	return (
		<main>
			<Title>Links</Title>
			<div>プログラミング</div>
			<div className={styles.flex}>
				<SNSLink
					href="https://github.com/Hietan"
					img="/logo/official/GitHub.svg"
					serviceName="GitHub"
					accountName="Hietan"
				/>
				<SNSLink
					href="https://atcoder.jp/users/hietan"
					img="/logo/official/AtCoder.png"
					serviceName="AtCoder"
					accountName="hietan"
				/>
				<SNSLink
					href="https://codeforces.com/profile/Hietan"
					img="/logo/Codeforces.svg"
					serviceName="Codeforces"
					accountName="Hietan"
				/>
				<SNSLink
					href="https://www.kaggle.com/hietan"
					img="/logo/Kaggle.svg"
					serviceName="Kaggle"
					accountName="Hietan"
				/>
			</div>
			<div>Techブログ</div>
			<div className={styles.flex}>
				<SNSLink 
					href="https://qiita.com/Hietan"
					img="/logo/official/Qiita.png"
					serviceName="Qiita"
					accountName="Hietan"
				/>	
				<SNSLink
					href="https://zenn.dev/hietan"
					img="/logo/official/Zenn.svg"
					serviceName="Zenn"
					accountName="hietan"
				/>
				<SNSLink
					href="https://hietan.hatenablog.com/"
					img="/logo/official/HatenaBlog.svg"
					serviceName="Hatena Blog"
					accountName="Hietan"
				/>
				<SNSLink
					href="https://note.com/hietan"
					img="/logo/official/note.svg"
					serviceName="note"
					accountName="Hietan"
				/>
			</div>
			<div>SNS</div>
			<div className={styles.flex}>
				<SNSLink
					href="https://x.com/Hietamaru"
					img="/logo/official/X.svg"
					serviceName="X"
					accountName="Hietamaru"
				/>
				<SNSLink
					href="https://www.instagram.com/hietamaru/"
					img="/logo/official/Instagram.png"
					serviceName="Instagram"
					accountName="Hietamaru"
				/>
				<SNSLink
					href="https://www.facebook.com/profile.php?id=100091391457577"
					img="/logo/official/Facebook.png"
					serviceName="Facebook"
					accountName="Hietan"
				/>
				<SNSLink
					href="https://www.linkedin.com/in/kazumayamasaki/"
					img="/logo/official/LinkedIn.png"
					serviceName="LinkedIn"
					accountName="Kazuma Yamasaki"
				/>
			</div>
			<Title>Contact</Title>
		</main>
	);
}
