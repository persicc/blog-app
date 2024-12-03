import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className={styles.heroConatiner}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Fashion</h1>
        <span>Category</span>
      </div>

      <div className={styles.featured}>
        <Link href={"/blog/1"}>
          <div className={styles.imageContainer}>
            <Image src="/img1.jpg" fill objectFit="cover" alt="fashion" />
          </div>
        </Link>
        <div className={styles.imageContainer}>
          <Image src="/img2.jpg" fill objectFit="cover" alt="fashion" />
        </div>
        <div className={styles.imageContainer}>
          <Image src="/img3.jpg" fill objectFit="cover" alt="fashion" />
        </div>
        <div className={styles.imageContainer}>
          <Image src="/img4.jpg" fill objectFit="cover" alt="fashion" />
        </div>
        <div className={styles.imageContainer}>
          <Image src="/img5.jpg" fill objectFit="cover" alt="fashion" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
