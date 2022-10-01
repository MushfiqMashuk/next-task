import UserTitle from "../UserTitle";
import styles from "./userCard.module.scss";

const UserCard = ({user}) => {
  return (
    <div className={styles.card_body}>
      <div className={styles.card_title}>
        <UserTitle>{user.name}</UserTitle>
      </div>
      <div className={styles.card_content}>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
