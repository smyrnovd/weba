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
  const [boardsData, setBoardsData] = useState();
  // const [isFatching, setIsFatching] = useState(false);

  // const FetchBorders = async (url: string) => {
  //   try {
  //     const res = await fetch(url);
  //     const json = await res.json();
  //     setBoardsData(json);
  //   } catch (err) {
  //     console.log(`Oops, there was an error :( ${err}`);
  //     setIsFatching(false);
  //   }
  // };

  // useEffect(() => {
  //   if (isFatching === false) {
  //     setIsFatching(true);
  //     FetchBorders(url);
  //   }
  // });

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => setBoardsData(json));
  }, [boardsData]);

  const reanderBoard = () => {
    if (boardsData) {
      boardsData.map((b: any, i: number) => {
        console.log(b.name);
        return <Board key={i} board_name={b.name} />;
      });
    }
  };

  return (
    <div>
      <h1>DASHBOARD</h1>
      {/* {reanderBoard()} */}
      <a href={process.env.REACT_APP_TRELLO_URL} onClick={() => removeToken()}>
        You can remove token with this link
      </a>
    </div>
  );
};
