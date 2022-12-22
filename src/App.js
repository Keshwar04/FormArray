import { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { TbCircleMinus } from "react-icons/tb";
import "./styles.css";

export default function App() {
  const [arr, setArr] = useState([{}]);

  const addFormArray = () => {
    setArr((e) => [...e, { fName: "", lName: "" }]);
  };

  const handleFormArray = (e, index) => {
    const { name, value } = e.target;
    let addFieldArr = [...arr];
    addFieldArr[index][name] = value;
    setArr(addFieldArr);
    console.log(arr);
  };
  const removeFormArray = (index) => {
    let removeArr = [...arr];
    removeArr.splice(index, 1);
    setArr(removeArr);
  };

  return (
    <div className="App">
      <h1>Form Array</h1>
      {arr.map((e, i) => (
        <div key={i}>
          <input
            name="fName"
            value={e.fName || ""}
            onChange={(e) => handleFormArray(e, i)}
          />{" "}
          &nbsp;
          <input
            name="lName"
            value={e.lName || ""}
            onChange={(e) => handleFormArray(e, i)}
          />{" "}
          &nbsp;
          <HiOutlinePlusCircle className="cursor" onClick={addFormArray} />
          &nbsp;
          <TbCircleMinus
            className="cursor"
            onClick={() => removeFormArray(i)}
          />
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
