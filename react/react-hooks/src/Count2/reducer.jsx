const reducer = (count, action) => {
  if (action.type === "INC") {
    return count + 1;
  }
  if (action.type === "DEC" && count >= 1) {
    return count - 1;
  }
  return count;
};
export default reducer;
