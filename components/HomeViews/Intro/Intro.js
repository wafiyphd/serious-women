import Image from "next/image";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className="container">
          <div className="row justify-content-center pt-5 pb-5">
            <Image
              width={37}
              height={73}
              quality={100}
              src="/static/images/swlogo.png"
              alt="SW Logo"
              layout="fixed"
            />
          </div>
          <div className="row justify-content-center text-center pt-5">
            <div className="col-12">
              <p className={styles.introHeader}>
                Here women are free to be their{" "}
                <span className={styles.beautiful}>
                  <span className={styles.text}>beautiful</span>
                  <img src="/static/images/box.png" />
                </span>
                ,{" "}
                <span className={styles.paradox}>
                  <span className={styles.text}>paradoxical</span>
                  <img src="/static/images/paradoxline.png" />
                </span>
                ,{" "}
                <span className={styles.messy}>
                  <span className={styles.text}>messy</span>
                  <img src="/static/images/messyline.png" />
                </span>{" "}
                selves.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className={styles.imageDiv}>
              <Image
                width={450}
                height={450}
                quality={100}
                src="/static/images/handdown.png"
                alt="SW Logo"
                layout="intrinsic"
              />
              <span className={styles.scrollText}>
                Scroll down.
                <br />
                You'll know.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
