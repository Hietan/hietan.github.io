import type {Metadata} from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Musician — Kazuma Yamasaki",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MusicianPage() {
  return (
    <div className={styles.page}>
      <div className={styles.paper}>

        {/* Masthead */}
        <header className={styles.masthead}>
          <div className={styles.mastheadTop}>
            <span className={styles.edition}>Vol. I &nbsp;·&nbsp; Jazz Edition</span>
            <span className={styles.date}>Est. 2020</span>
          </div>
          <div className={styles.rule} />
          <h1 className={styles.siteTitle}>THE MUSICIAN</h1>
          <p className={styles.subtitle}>山﨑 和真 &nbsp;/&nbsp; Kazuma Yamasaki</p>
          <div className={styles.rule} />
          <div className={styles.ruleDouble} />
        </header>

        {/* Lead */}
        <section className={styles.lead}>
          <div className={styles.leadContent}>
            <h2 className={styles.leadHeadline}>
              音楽と研究の交差点で<br />テナーサックスを吹く
            </h2>
            <p className={styles.leadDeck}>
              A software engineering researcher by day, a jazz saxophonist by night.
              Performing in small groups and big bands around Nara and beyond.
            </p>
          </div>
        </section>

        <div className={styles.ruleDouble} />

        {/* 3-column body */}
        <div className={styles.columns}>

          {/* Col 1: Biography */}
          <article className={styles.col}>
            <h3 className={styles.colHead}>Biography</h3>
            <div className={styles.colRule} />
            <p className={styles.body}>
              奈良先端科学技術大学院大学（NAIST）の博士課程に在籍しながら、
              学生時代から続けるテナーサックスを演奏している。
              大学入学と同時にジャズに出会い、以来ジャズを中心に活動する。
            </p>
            <p className={styles.body}>
              Charlie Parker、John Coltrane、Wayne Shorter の音楽に強く影響を受け、
              バップからモーダルジャズまで幅広いスタイルを探求している。
            </p>
            <p className={styles.body}>
              現在はカルテットを中心に活動し、スタンダードナンバーのほかオリジナル曲にも取り組んでいる。
            </p>
          </article>

          {/* Col 2: Instruments & Style */}
          <article className={styles.col}>
            <h3 className={styles.colHead}>Instrument</h3>
            <div className={styles.colRule} />
            <p className={styles.instrumentName}>Tenor Saxophone</p>
            <p className={styles.body}>
              Selmer Mark VI をモデルとした機材構成で演奏。
              セッティングはリードの厚さ、マウスピースの開きなど細部にこだわる。
            </p>

            <h3 className={styles.colHead} style={{marginTop: "1.5rem"}}>Style</h3>
            <div className={styles.colRule} />
            <ul className={styles.list}>
              <li>Hard Bop</li>
              <li>Modal Jazz</li>
              <li>Post-Bop</li>
              <li>Jazz Standards</li>
            </ul>

            <h3 className={styles.colHead} style={{marginTop: "1.5rem"}}>Influences</h3>
            <div className={styles.colRule} />
            <ul className={styles.list}>
              <li>John Coltrane</li>
              <li>Wayne Shorter</li>
              <li>Sonny Rollins</li>
              <li>Charlie Parker</li>
            </ul>
          </article>

          {/* Col 3: Performances */}
          <article className={styles.col}>
            <h3 className={styles.colHead}>Performances</h3>
            <div className={styles.colRule} />

            {[
              {date: "2024.12", title: "Year-End Jazz Session", venue: "某ジャズバー, 奈良"},
              {date: "2024.08", title: "Summer Jazz Live", venue: "大学学祭ステージ, 奈良"},
              {date: "2024.05", title: "Spring Quartet Concert", venue: "某ホール, 大阪"},
              {date: "2023.12", title: "Jazz Standards Night", venue: "某ライブハウス, 京都"},
              {date: "2023.07", title: "Open Mic Jazz Session", venue: "某カフェ, 奈良"},
            ].map(p => (
              <div key={p.date} className={styles.performanceItem}>
                <span className={styles.perfDate}>{p.date}</span>
                <div>
                  <div className={styles.perfTitle}>{p.title}</div>
                  <div className={styles.perfVenue}>{p.venue}</div>
                </div>
              </div>
            ))}
          </article>

        </div>

        <div className={styles.ruleDouble} />

        {/* Footer */}
        <footer className={styles.footer}>
          <p>All rights reserved &nbsp;·&nbsp; Kazuma Yamasaki</p>
        </footer>

      </div>
    </div>
  );
}
