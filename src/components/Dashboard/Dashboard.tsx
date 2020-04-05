import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Board } from "./Board";
import { getToken } from "../../redux";
import { connect } from "react-redux";
import { removeToken } from "../../redux";

//компонет борд
//роуты для бордов
//детальный вид борда

type DashboardType = {
  token: string;
  logOut?: () => void;
};
const Dashboard: React.FC<DashboardType> = ({ token, logOut }) => {
  const { REACT_APP_API_KEY } = process.env;
  // const token = getFromLocalStorage();
  console.log(token);
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
        <div>
          <h2>Data is loading...</h2>
        </div>
      );
    } else {
      return (
        <>
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
    <div className="container pt-4">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <h1 className="h1">Панель управления</h1>
        </div>
        <div className="col-lg-2">
          <Link
            to="/webacademy/trello"
            className="btn btn-danger"
            onClick={logOut}
          >
            Выйти
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">{renderBoards()}</div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    token: getToken(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logOut: () => dispatch(removeToken()),
  };
};

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export { ConnectedDashboard as Dashboard };
