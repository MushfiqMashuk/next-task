import { useEffect, useState } from "react";
import Form from "../Form";
import Modal from "../Modal";
import UserCard from "../UserCard";
import styles from "./body.module.scss";

const Body = () => {
  const [users, setUsers] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch(process.env.NEXT_PUBLIC_USERS_API);

      const userData = await data.json();
      setUsers(userData);
    };

    // fetching users data from the provided url
    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <input type="text" placeholder="search" className={styles.search_bar} />
        <button
          className={styles.add_button}
          onClick={() => setShowModal(true)}
        >
          Add
        </button>
      </div>
      <div className={styles.content}>
        {showModal && (
          <Modal title="Add new member" onClose={() => setShowModal(false)}>
            <Form onClose={() => setShowModal(false)} />
          </Modal>
        )}
        {users &&
          users.map((user) => (
            <UserCard
              user={{
                name: user.name,
                email: user.email,
                phone: user.phone,
              }}
              key={user.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Body;
