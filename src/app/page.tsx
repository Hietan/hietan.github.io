import Hero from "@/components/Hero";
import Title from "@/components/Title";
import styles from "./page.module.scss";

export default function Home() {
  return (
		<>
			<Hero title="Test title" />
			<Title title="About me" />
		</>
  );
}
