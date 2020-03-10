import { getFromLocalStorage } from "./storage";
import { TOKEN_STORAGE_KEY } from "./storage";
export const isAuth = () => {
  return getFromLocalStorage(TOKEN_STORAGE_KEY) ? true : false;
};
