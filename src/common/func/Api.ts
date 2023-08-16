import React, { useState } from "react";
import { db } from "common/components/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getData = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<any>();
  await getDocs(collection(db, "kim")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setData(newData);
  });
};

console.log(data);
