import Image from "next/image";
import styles from "./Who.module.scss";

const Who = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pattern}>
          <Image
            width={122}
            height={126}
            quality={100}
            src="/static/images/16dots.png"
            alt="pattern"
            layout="fixed"
          />
        </div>
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <p>
                    <span className={styles.whoHeader}>Who</span>
                  </p>
                  <p className={styles.whoSubheader}>
                    Shaping stories from consumer insights and raw seminar data.
                  </p>
                  <p className={styles.whoContent}>
                    Our women-focused media brand is uniquely South East Asian.
                    And serves a compelling market gap. Unapologetic, incisive,
                    free-spirited and witty. We reflect the quagmire of near
                    impossible choices women face in a world where the
                    traditional and the modern collide. Without being preachy or
                    judgmental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who;
