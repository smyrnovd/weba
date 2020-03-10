import { setToLocalStorage, TOKEN_STORAGE_KEY } from ".";
export const removeToken = () => {
  setToLocalStorage(TOKEN_STORAGE_KEY, null);
};
