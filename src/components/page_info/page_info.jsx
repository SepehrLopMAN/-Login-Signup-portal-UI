import styles from "./page_info.module.css";

const PageInfo = ({ bgColor, text, navigate }) => (
  <div className={styles.container} style={{ backgroundColor: bgColor }}>
    {/* {console.log(navigate)} */}
    <span className={styles.container__back_key} onClick={() => navigate("/")}>
      ↩
    </span>
    <p className={styles.container__paragraph}>{text}</p>
  </div>
);
export default PageInfo;
