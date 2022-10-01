import styles from "./body.module.scss";

const Body = () => {
  return (
    <div className={styles.container}>
        <div className={styles.head}>
            <input type="text" placeholder="search" className={styles.search_bar}/>
            <button className={styles.add_button}>Add</button>
        </div>
        <div className={styles.content}></div>
    </div>
  )
}

export default Body