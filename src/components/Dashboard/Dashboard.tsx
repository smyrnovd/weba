import React, { useState, useEffect } from "react";
import { removeToken } from "../../utils/removeToken";
import { getFromLocalStorage } from "../../utils";
import { Board } from "./Board";

//компонет борд
//роуты для бордов
//детальный вид борда
export const Dashboard = (props: any) => {
  const { REACT_APP_API_KEY } = process.env;
  const token = getFromLocalStorage();
  const url = `https://api.trello.com/1/members/me/boards?filter=all&fields=all&lists=none&memberships=none&organization=false&organization_fields=name%2CdisplayName&key=${REACT_APP_API_KEY}&token=${token}`;
  const [boardsData, setBoardsData] = useState([]);
  const [isFatching, setIsFatching] = useState(false);

  const FetchBorders = async () => {
    const res = await fetch(url);
    const json = await res.json();
    await setBoardsData(json);
    await setIsFatching(true);
  };

  useEffect(() => {
    FetchBorders();
  }, []);

  const renderBoards = () => {
    if (!isFatching) {
      return (
        <>
          <h2>Data is loading...</h2>
        </>
      );
    } else {
      return (
        <>
          {console.log(isFatching, boardsData)}
          {boardsData.map(
            (b: any, i: number) =>
              !b.closed && (
                <Board
                  key={i}
                  board_name={b.name}
                  card_img={b.prefs.backgroundImage}
                />
              )
          )}
        </>
      );
    }
  };

  return (
    <div className="container">
      <h1 className="h1">DASHBOARD</h1>
      <div className="row">{renderBoards()}</div>

      <a href={process.env.REACT_APP_TRELLO_URL} onClick={removeToken}>
        You can remove token with this link
      </a>
    </div>
  );
};
