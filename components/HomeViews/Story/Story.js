import Image from "next/image";
import styles from "./Story.module.scss";

const Story = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className="container pt-5 pb-5">
          <div className={styles.rectangle}>
            <div className="row justify-content-center text-center pt-5 pb-5">
              <div className="col-12">
                <p className={styles.submitHeader}>Submit Story</p>
                <p className={styles.submitSubheader}>
                  Nominate a friend the world should know about.
                </p>
              </div>
            </div>
            <div className="row justify-content-center text-center pb-5">
              <div className={styles.button}>
                <div className={styles.slantButton}>
                  <Image
                    width={174}
                    height={46}
                    quality={100}
                    src="/static/images/slantbutton.png"
                    alt="button"
                    layout="fixed"
                  />
                </div>
                <span className={styles.buttonText}>Submit</span>
              </div>
            </div>
            <div className={styles.lipImage}>
              <Image
                width={176}
                height={197}
                quality={100}
                src="/static/images/lip.png"
                alt="lips"
                layout="fixed"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
