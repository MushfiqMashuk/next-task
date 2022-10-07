import { useCallback, useEffect, useState } from "react";
import debounce from "../../helpers/debounce";
import useUsers from "../../store/useUsers";
import Form from "../Form";
import LoadingSpinner from "../LoadingSpinner";
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

  // Whenever our global state changes, we change our local state
  useEffect(() => {
    setUsers(globalUsers);
  }, [globalUsers]);

  useEffect(() => {
    // Fetching users data
    const fetchUser = async () => {
      setLoading(true);
      const data = await fetch(process.env.NEXT_PUBLIC_USERS_API);
      const userData = await data.json();

      // set the user state
      setGlobalUsers(userData);
      setUsers(userData);

      setLoading(false);
    };

    fetchUser();
  }, []);

  // Whenever user types something in the search box
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
          onKeyUp={(e) => optimizedFn(e.target.value)}
        />
        <button
          className={styles.add_button}
          onClick={() => setShowModal(true)}
        >
          Add
        </button>
      </div>
      <div className={styles.content}>
        {loading && <LoadingSpinner />}
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
