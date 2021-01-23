import Image from "next/image";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className="container">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-12">
              <div className="row justify-content-end">
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
