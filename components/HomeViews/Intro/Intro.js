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
                Here women are free to be their beautiful, paradoxical, messy
                selves.
              </p>
            </div>
          </div>
          <div className="row justify-content-center"></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
