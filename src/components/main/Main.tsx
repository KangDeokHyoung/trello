import React, { useState, useEffect } from "react";
import ItemList from "../main/itemlist/ItemList";
import { db } from "common/components/firebase";
import {
  collection,
  query,
  onSnapshot,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";
import { getApi } from "common/func/Api";
import "./Main.scss";

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

  const h = async () => {
    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(docRef);
    console.log({ docSnap });

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getApi("work");
    h();
  }, []);
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
