import React, { useState } from "react";
import "./spliceTest.css";
import { _splice } from "../utils/splice";
/* 
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
*/

function SpliceTest() {
  const [inputArray, setInputArray] = useState();
  const [answer, setAnswer] = useState("");
  const [removedElements, setRemovedElements] = useState("");
  const [start, setStart] = useState();
  const [deleteCount, setDeleteCount] = useState("");
  const [itemsToAdd, setItemsToAdd] = useState();
  const splice = () => {
    const splitInput = inputArray.split(",");

    const { modifiedArray, removedElements } = _splice(
      splitInput,
      Number(start),
      Number(deleteCount)
    );
    setAnswer(modifiedArray);
    setRemovedElements(removedElements);
  };
  return (
    <>
      <div className="inputBox">
        <div className="inputWithLabel">
          <span className="testMargin">{`Input Array, Enter CSV`}</span>
          <input
            value={inputArray}
            onChange={(e) => setInputArray(e.target.value)}
          ></input>
        </div>
        <div className="inputWithLabel">
          <span className="testMargin">{`Start`}</span>
          <input
            value={start}
            onChange={(e) => setStart(e.target.value)}
          ></input>
        </div>
        <div className="inputWithLabel">
          <span className="testMargin">{`Delete Count`}</span>
          <input
            value={deleteCount}
            onChange={(e) => setDeleteCount(e.target.value)}
          ></input>
        </div>
        <div className="inputWithLabel">
          <span className="testMargin">{`Items To Add`}</span>
          <input
            value={itemsToAdd}
            onChange={(e) => setItemsToAdd(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="resultBox">
        <button className="resultButton" onClick={() => splice()}>
          Show result
        </button>
        <span>{`Result : ${answer}`}</span>
        <span>{`Removed elements : ${removedElements}`}</span>
      </div>
    </>
  );
}

export default SpliceTest;
