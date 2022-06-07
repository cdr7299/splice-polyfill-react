export const _splice = (inputArray, start, deleteCount, ...rest) => {
  console.log(" Input Array : ", inputArray);
  console.log(" Start: ", start);
  console.log(" Delete count : ", deleteCount);
  console.log(" Rest : ", ...rest);
  let removedElements = [];
  // let modifiedArray = [];
  const elementsToAdd = [...rest];
  const arrLength = inputArray.length;

  //start
  if (start >= arrLength) {
    console.log(" start > length case");
    let count = elementsToAdd.length;
    for (let i = 0; i < count; i++) inputArray.push(elementsToAdd[i]);
    return { modifiedArray: inputArray, removedElements: [] };
  }

  if (start < 0) {
    let newStart = inputArray.length - start;
    //doSomethingNow
  }

  //delete
  if (typeof deleteCount === "number") {
    console.log("in delete");
    for (let i = start; i < start + deleteCount; i++) {
      removedElements.push(inputArray[i]);
    }

    // for (let i = start; i <= start + deleteCount; i++) {
    //   delete inputArray[i];
    // }
    return { modifiedArray: inputArray, removedElements };
  }

  if (deleteCount === undefined) {
  }

  return { inputArray, removedElements };
};
