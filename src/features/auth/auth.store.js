// Minimal store placeholder (can be replaced with Zustand/Redux)
let _user = null;
export const setUser = (u) => (_user = u);
export const getUser = () => _user;
