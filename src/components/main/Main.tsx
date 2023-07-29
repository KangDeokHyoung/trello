import React, { useState } from "react";
import "./Main.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ItemList from "../main/itemlist/ItemList";

export interface Props {
  checked?: number;
  className?: string;
  disabled?: boolean;
  onChange?: (check: number) => void;
}

const Main: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState([0, 0, 0]);
  const Do = ["Todo", "Doing", "Done"];

  const checkHandler = (i: number) => {
    setChecked((prevState) => {
      const assign = [...prevState];
      assign[i] = !!assign[i] ? 0 : 1;
      return assign;
    });
  };

  return (
    <>
      <div id="main-content-header">
        <div className="breadcrumb-list-wrap">
          <ul className="breadcrumb">
            <li>프로젝트</li>
            <li>/</li>
            {/* <li>{data}</li> */}
          </ul>
        </div>
        {/* <h4>{data}</h4> */}
      </div>
      <div id="main-content-body">
        <div className="main-content-list-wrap">
          {checked.map((_, i) => (
            <ItemList
              Do={Do[i]}
              key={i}
              checked={checked[i]}
              checkHandler={() => checkHandler(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
