export const setToken = (token: string) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};

export const removeToken = () => {
  return {
    type: "REMOVE_TOKEN",
    token: "",
  };
};
