import React, { useState, useEffect } from "react";
import ItemList from "../main/itemlist/ItemList";
import { db } from "common/components/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Main.scss";
import { getData } from "common/func/Api";

export interface Props {
  checked?: number;
  className?: string;
  disabled?: boolean;
  onChange?: (check: number) => void;
}

export const Main: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState([0, 0, 0]);
  const Do = ["Todo", "Doing", "Done"];

  const checkHandler = (i: number) => {
    setChecked((prevState) => {
      const assign = [...prevState];
      assign[i] = !!assign[i] ? 0 : 1;
      return assign;
    });
  };

  const [todos, setTodos] = useState<any>([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "kim")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const result = getData();

  console.log(result);

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
