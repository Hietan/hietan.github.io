import type {ReactNode} from "react";
import JoyProvider from "./JoyProvider";
import styles from "./layout.module.css";

export default function ProgrammerLayout({children}: {children: ReactNode}) {
  return (
    <JoyProvider>
      <div className={styles.root}>
        {children}
      </div>
    </JoyProvider>
  );
}
