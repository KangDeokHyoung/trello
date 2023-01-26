import React, { useEffect, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { DeleteCardComponent, AddCardComponet } from "../../ui/popover/CustomComponent";
import "./itemList.scss";
import { db } from "common/components/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";

interface Props {
  checked: number;
  checkHandler: () => void;
  Do: string;
}

const MainDoListTitle: React.FC<{ Do: string }> = ({ Do }) => {
  return (
    <div className={`main-do-list-title ${Do}`}>
      <div>{Do}</div>
    </div>
  );
};

const ItemList: React.FC<Props> = ({ Do, checked, checkHandler }) => {
  const [users, setUsers] = useState<any[]>([]);
  const usersCollectionRef = collection(db, "todos");
  const getTodos = async () => {
    const q = query(usersCollectionRef, orderBy("dates", "desc"));
    const response = await getDocs(q);
    const data = response.docs.map((el: any) => ({ data: el.data(), id: el.id }));
    setUsers(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const createUser = async (addCard: string) => {
    const dates = new Date().getTime(); // getTime 숫자로 변경해준다.
    await addDoc(usersCollectionRef, { addCard, dates });
    getTodos();
  };

  const deleteUser = async (id: string) => {
    const usersDoc = doc(db, "todos", id);
    await deleteDoc(usersDoc);
    getTodos();
  };

  return (
    <div id="main-content-list-box">
      <MainDoListTitle Do={Do} />
      <div className="main-do-list">
        <div className={`main-do-list-bg list${Do}`}>
          <div className="list-title">
            <div>{Do}</div>
            <FiMoreHorizontal className="list-title-icon" />
          </div>

          {users.map((el) => (
            <div key={el.id} className="list-input">
              <div className="list-input-box">{el.data.addCard}</div>
              <DeleteCardComponent
                placement="bottom"
                deleteUser={deleteUser}
                id={el.id}
              ></DeleteCardComponent>
            </div>
          ))}

          <div className="add-Card">
            <AddCardComponet placement="bottom" createUser={createUser} />
          </div>
          <div className="list-bottom-box">
            <div className="checkBox" onClick={checkHandler}>
              {!!checked && <BsCheckCircleFill className="checkBoxOn" />}
            </div>
            <div className="day">
              <BiTime />
              <span>2021-01-20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
