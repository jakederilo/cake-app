import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            Discover the Best Bakeries in Sorsogon!
          </h3>
          <span className={styles.subtitle}>Find your favorite treats</span>
          <p className={styles.desc}>
            Craving for delicious pastries or bread? Explore the top bakeries in Sorsogon and satisfy your taste buds!
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New Flavors Await! Stay Tuned for Bakery Updates
          </h3>
          <span className={styles.subtitle}>Exciting treats are on the way</span>
          <p className={styles.desc}>
            Get ready for a delightful experience with new flavors and specials from your favorite bakeries. Stay tuned for updates!
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
