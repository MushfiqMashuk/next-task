import { useCallback, useEffect, useState } from "react";
import debounce from "../../helpers/debounce";
import useUsers from "../../store/useUsers";
import Form from "../Form";
import Modal from "../Modal";
import UserCard from "../UserCard";
import styles from "./body.module.scss";

const Body = () => {
  const [globalUsers, setGlobalUsers] = useUsers((state) => [
    state.users,
    state.setUsers,
  ]);

  const [users, setUsers] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [loading, setLoading] = useState(false);

  const handleChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    setUsers(globalUsers);
  }, [globalUsers]);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const data = await fetch(process.env.NEXT_PUBLIC_USERS_API);

      const userData = await data.json();

      // set the user state
      setGlobalUsers(userData);
      setUsers(userData);
      setLoading(false);
    };

    // fetching users data from the provided url
    fetchUser();
  }, []);

  useEffect(() => {
    setLoading(true);
    setFilteredUsers(
      users?.filter(
        (user) =>
          user?.name?.toLowerCase().includes(searchValue) ||
          user?.email?.toLowerCase().includes(searchValue)
      )
    );
    setLoading(false);
  }, [searchValue]);

  const optimizedFn = useCallback(debounce(handleChange), []);

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
        {loading && <div>Loading...</div>}
        {showModal && (
          <Modal title="Add new member" onClose={() => setShowModal(false)}>
            <Form onClose={() => setShowModal(false)} />
          </Modal>
        )}
        {!loading && searchValue
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
          : !loading &&
            users &&
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
