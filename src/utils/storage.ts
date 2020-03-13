export const TOKEN_STORAGE_KEY: string = "TOKEN";

export const setToLocalStorage = (data: any) => {
  window.localStorage.setItem(TOKEN_STORAGE_KEY, data);
};

export const getFromLocalStorage = () => {
  return window.localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const isLoggedIn = () => {
  return !!getFromLocalStorage();
};
