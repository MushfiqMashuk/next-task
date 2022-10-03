import { useCallback, useEffect, useState } from "react";
import Form from "../Form";
import Modal from "../Modal";
import UserCard from "../UserCard";
import styles from "./body.module.scss";

const Body = () => {
  const [users, setUsers] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 80);
    };
  };

  const handleChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    setFilteredUsers(
      users?.filter(
        (user) =>
          user?.name?.toLowerCase().includes(searchValue) ||
          user?.email?.toLowerCase().includes(searchValue)
      )
    );
  }, [searchValue]);

  const optimizedFn = useCallback(debounce(handleChange), []);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch(process.env.NEXT_PUBLIC_USERS_API);

      const userData = await data.json();

      // set the user state
      setUsers(userData);
    };

    // fetching users data from the provided url
    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <input
          type="text"
          placeholder="search"
          className={styles.search_bar}
          onChange={(e) => optimizedFn(e.target.value)}
        />
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
        {searchValue
          ? filteredUsers &&
            filteredUsers.length > 0 &&
            filteredUsers.map((user) => (
              <UserCard
                user={{
                  name: user.name,
                  email: user.email,
                  phone: user.phone,
                }}
                key={user.id}
              />
            ))
          : users &&
            users.length > 0 &&
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
