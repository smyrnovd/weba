import { setToLocalStorage, TOKEN_STORAGE_KEY } from "../../utils";
export const removeToken = (onSetToken: (t: string) => void) => {
  onSetToken("");
  setToLocalStorage(TOKEN_STORAGE_KEY, "");
};
