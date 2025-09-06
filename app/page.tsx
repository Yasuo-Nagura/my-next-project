import styles from "./page.module.css";

export default function Home() {
  //JavaScriptの定数や式などを書くことができる
  // const name = "宇宙";

  // HTMLのようなマークアップを書くことができる
  // JavaScriptを書いたり、参照する際は{}で囲む
  return (
    <div>
      <h1 className={styles.title}> テクノロジーの力で世界を変える</h1>
      <p className={styles.description}>
        私たちは市場をリードしているグローバルテックカンパニーです。
      </p>
    </div>
  );
}
