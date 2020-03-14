import React from "react";
import { removeToken } from "../../utils/removeToken";
import { getFromLocalStorage } from "../../utils";

//компонет борд
//роуты для бордов
//детальный вид борда
export const Dashboard = (props: any) => {
  const { REACT_APP_API_KEY } = process.env;
  const token = getFromLocalStorage();
  const url = `https://api.trello.com/1/members/me/boards?filter=all&fields=all&lists=none&memberships=none&organization=false&organization_fields=name%2CdisplayName&key=${REACT_APP_API_KEY}&token=${token}`;
  console.log(fetch(url));
  return (
    <div>
      DASHBOARD
      <p>{token}</p>
      <a href={process.env.REACT_APP_TRELLO_URL} onClick={() => removeToken()}>
        You can remove token with this link
      </a>
    </div>
  );
};
