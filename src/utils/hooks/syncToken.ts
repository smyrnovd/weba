import {
  setToLocalStorage,
  getFromLocalStorage,
  TOKEN_STORAGE_KEY
} from "../../utils";

export const syncToken = (onSetToken: (t: string) => void) => {
  const tokenUrl: string = window.location.hash.split("=")[1];
  if (tokenUrl) {
    onSetToken(tokenUrl);
    setToLocalStorage(TOKEN_STORAGE_KEY, tokenUrl);
    console.log("if");
  } else {
    const localToken: any = getFromLocalStorage(TOKEN_STORAGE_KEY);
    onSetToken(localToken);
    console.log(localToken);
    console.log("else");
  }
};
