import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";


export default function Form() {
  /*********** Tableau des taches ***************/

  const [dataArr, setDataArr] = useState([
    { txt: "Chess", id: uuidv4(), completed: false },
    { txt: "Programming", id: uuidv4(), completed: false },
    { txt: "Traveling", id: uuidv4(), completed: false },
  ]);

  /***********input***************/
  const [valtxt, setvaltxt] = useState("");

  const modifytext = (e) => {
    setvaltxt(e.target.value);
    console.log(valtxt);
  };

  /***********Add Task***************/

  const addTodo = (e) => {e.preventDefault();

    const newArr = [...dataArr];
    const newTod = {};
    newTod.txt = valtxt;
    newArr.push(newTod);
    setDataArr(newArr);
    setvaltxt("");
  };

  /***********Delete Task***************/

  const DeleteEleme = (id) => {
    const newArr = dataArr.filter((el) => el.id !== id);
    setDataArr(newArr);
  };

  /***********fonction toggleTodo ***************/

  const toggleTodo = (id) => {
    const newArr = dataArr.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setDataArr(newArr);
  };

  return (
    <div className="toDoList">
      <form onSubmit={(e) => addTodo(e)} className="mb-3">
        <label className="list-items">
          <h2>TASK MASTER</h2>
        </label>
        <input
          type="text"
          placeholder="Add task"
          className="form-control"
          id="todo"
          value={valtxt}
          onChange={(e) => modifytext(e)}
        />

        <button>+</button>
      </form>
      <ul>
        {dataArr.map((el) => {
          return (
            <Item
              txt={el.txt}
              key={el.id}
              completed={el.completed}
              delFunc={() => DeleteEleme(el.id)}
              toggleTodo={() => toggleTodo(el.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
