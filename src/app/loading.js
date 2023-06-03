import styles from "./styles/common.module.css";

const loading = () => {
  return (
    <div>
      <section className={styles.loading_section}>
        <div className={styles.loading}></div>
      </section>
    </div>
  );
};

export default loading;
