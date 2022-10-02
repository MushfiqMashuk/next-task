import UserCard from "../UserCard";
import styles from "./body.module.scss";

const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <input type="text" placeholder="search" className={styles.search_bar} />
        <button className={styles.add_button}>Add</button>
      </div>
      <div className={styles.content}>
        <UserCard
          user={{
            name: "Mash",
            email: "thisismail@gmail.com",
            phone: "+8801625347586",
          }}
        />
        <UserCard
          user={{
            name: "Mash",
            email: "thisismail@gmail.com",
            phone: "+8801625347586",
          }}
        />
        <UserCard
          user={{
            name: "Mash",
            email: "thisismail@gmail.com",
            phone: "+8801625347586",
          }}
        />
        <UserCard
          user={{
            name: "Mash",
            email: "thisismail@gmail.com",
            phone: "+8801625347586",
          }}
        />
        <UserCard
          user={{
            name: "Mash",
            email: "thisismail@gmail.com",
            phone: "+8801625347586",
          }}
        />
        <UserCard
          user={{
            name: "Mash",
            email: "thisismfgfdgdfgfgfgdail@gmail.com",
            phone: "+880162ffdgfdfgdfgdfgdfgfhfghfgggggggggggggggggggfhggfhhhhhhhhhhhhhhhhhhhhhdgdfgdffghfhfhgdfg5347586 dfdgdggggggg",
          }}
        />
        <UserCard
          user={{
            name: "Mash",
            email: "thisismail@gmail.com",
            phone: "+8801625347586",
          }}
        />
        <UserCard
          user={{
            name: "Mash",
            email: "thisismail@gmail.com",
            phone: "+8801625347586",
          }}
        />
      </div>
    </div>
  );
}

export default Body