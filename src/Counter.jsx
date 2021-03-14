import React, { useState } from "react";
import { collectionData } from "rxfire/firestore";
import { switchMap, filter } from "rxjs/operators";
import { auth, firestore } from "../src/firebase";
import { authState } from "rxfire/auth";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  authState(auth)
    .pipe(filter((user) => !!user))
    .pipe(switchMap((u) => collectionData(firestore.collection("users"))))
    .subscribe((next) => setCounter(next.length));
  return <div className="counter">{`${counter} users`}</div>;
};

export default Counter;
