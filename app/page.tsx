import Image from "next/image";

import styles from "./page.module.scss";

import Grid12 from "@/components/layouts/Grid12/Grid12";
import Title from "@/components/elements/Title/Title"
import SNSLink from "@/components/elements/SNSLink/SNSLink"

export default function Home() {
	return (
		<main>
			<Title>About Me</Title>
			<Grid12>
				<div className={styles.imageWrapper} style={{ gridColumn: '1 / 5' }}>
					<Image
						className={styles.image}
						src="/KazumaYamasaki.jpg"
						fill
						alt="Kazuma Yamasaki"
					/>
				</div>
				<section style={{ gridColumn: '5 / 12' }}>
					<h3>山﨑 和真 <small>（やまさき かずま）</small></h3>
					<ul>
						<li>生年月日 : 2001年 06月 22日 （金）</li>
						<li>年齢 : 23 歳 （修士１年）</li>
						<li>住所 : 神戸生まれ，神戸育ち，神戸在住 （３年間，京都府精華町に在住）</li>
						<li>所属：奈良先端科学技術大学院大学 先端科学技術研究科 先端科学技術専攻 ソフトウェア工学研究室</li>
						<li>専門：ソフトウェア工学</li>
						<li>趣味：プログラミング，音楽 （特に，吹奏楽，Jazz）</li>
					</ul>
				</section>
			</Grid12>
			<Title>Links</Title>
			<h3>プログラミング</h3>
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
			<h3>Tech ブログ</h3>
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
			<h3>SNS</h3>
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
