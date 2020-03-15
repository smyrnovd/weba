export const TOKEN_STORAGE_KEY: string = "TOKEN";

export const setToLocalStorage = (data: any): void => {
  window.localStorage.setItem(TOKEN_STORAGE_KEY, data);
};

export const getFromLocalStorage = (): string | null => {
  return window.localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const isLoggedIn = (): boolean => {
  return !!getFromLocalStorage();
};
