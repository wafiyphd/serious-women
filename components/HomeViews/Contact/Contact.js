import Image from "next/image";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pattern}>
          <Image
            width={122}
            height={77}
            quality={100}
            src="/static/images/8dots.png"
            alt="pattern"
            layout="fixed"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-12">
              <div className="row justify-content-end">
                <div className="col-lg-5">
                  <div className={styles.imageDiv}>
                    <Image
                      width={585}
                      height={582}
                      quality={100}
                      src="/static/images/dogglasses.png"
                      alt="dog"
                      layout="fixed"
                    />
                    <div className={styles.leftGlass}>
                      <Image
                        width={97}
                        height={73}
                        quality={100}
                        src="/static/images/leftglass.png"
                        alt="dog"
                        layout="fixed"
                      />
                    </div>
                    <div className={styles.rightGlass}>
                      <Image
                        width={86}
                        height={73}
                        quality={100}
                        src="/static/images/rightglass.png"
                        alt="dog"
                        layout="fixed"
                      />
                    </div>
                    <span className={styles.heText}>he</span>
                    <span className={styles.lloText}>llo</span>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <p className={styles.contactHeader}>Thank you, next</p>

                  <p className={styles.contactSubheader}>
                    Wish to know about us? Go ahead, drop us a note —{" "}
                    <span className={styles.emailBox}>
                      contact@seriouswomen.com
                    </span>
                  </p>

                  <p className={styles.findHeader}>or find us at</p>
                  <p className={styles.contactSubheader}>
                    The Hive Lavender
                    <br />
                    Vanguard Campus
                    <br />1 Kallang Junction
                    <br />
                    Singapore 339263
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

export default Contact;
