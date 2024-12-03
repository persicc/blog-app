import Image from "next/image";
import styles from "./page.module.css";

function SingleBlogPage() {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Be part of our Broadcast</h1>
        <div className={styles.heroImage}>
          <Image src="/img1.jpg" fill objectFit="cover" alt="fashion" />
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
