import { useContext } from "react";
import { AppContext } from "../context/context";
function Child() {
  const userData = useContext(AppContext);
  console.log(userData);
  return (
    <>
      <h1>
        Child = My name is : {userData.name} and my age is : {userData.age}
      </h1>
    </>
  );
}

export default Child;
