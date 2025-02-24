// file: /components/FileDiff.js
import { diffLines } from "diff";
import styles from "@/styles/FileDiff.module.css"; // optional for styling

export default function FileDiff({ before, after }) {
  const diff = diffLines(before, after);

  return (
    <div className={styles.diffContainer}>
      <h2>File Diff</h2>
      <pre className={styles.diffContent}>
        {diff.map((part, index) => {
          // Each `part` will have:
          //   part.added === true if this is an added line
          //   part.removed === true if this is a removed line
          //   part.value === the text
          const textStyle = part.added
            ? styles.added
            : part.removed
            ? styles.removed
            : styles.unchanged;

          return (
            <span key={index} className={textStyle}>
              {part.value}
            </span>
          );
        })}
      </pre>
    </div>
  );
}
