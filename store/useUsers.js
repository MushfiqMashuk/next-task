import create from "zustand";

const useUsers = create((set) => ({
  users: [],
  setUsers: (totalUsers) => set(() => ({ users: totalUsers })),
  updateUsers: (newUser) =>
    set((state) => ({ users: state.users.push(newUser) })),
}));

export default useUsers;
