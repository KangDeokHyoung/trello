/* eslint-disable react-hooks/rules-of-hooks */
import { db } from "common/components/firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

export const getApi = (dataType: string) => {
  const userCollectionRef = collection(db, dataType);
  const q = query(userCollectionRef, orderBy("createdAt"));
  const result = onSnapshot(q, (snapshot) => {
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      data: { ...doc.data() },
    }));
  });

  console.log({ result });
};
