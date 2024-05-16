"use client";
import styles from "./page.module.css"
import "../../../dist/index.css"
import { LSReleaseLog } from "../../../dist/index"

export default function Home() {
  return (
    <main className={styles.main}>
      <LSReleaseLog
        githubBearerToken={process.env.NEXT_PUBLIC_GITHUB_BEARER_TOKEN!}
        repoOwner={process.env.NEXT_PUBLIC_REPO_OWNER!}
        repoName={process.env.NEXT_PUBLIC_REPO_NAME!} />
    </main>
  );
}
