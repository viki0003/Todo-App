import React, { useState } from "react";
import "./styles.css";
import Ilists from "./ItemLists";

function App() {
  const [todoItems, setTodoItems] = useState();
  const [updateTodo, setUpdateTodo] = useState([]);
  const Todoinput = (e) => {
    e.preventDefault();
    setTodoItems(e.target.value);
  };
  const AddBtn = () => {
    setUpdateTodo((prevItems) => {
      return [...prevItems, todoItems];
    });
    setTodoItems("");
  };

  const deleteItems = (id) => {
    setUpdateTodo((prevItems) => {
      return prevItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <React.Fragment>
      <div className="Main-Div">
        <div className="Todo-App">
          <div className="Todo-Content">
            <div className="Todo-Heading">
              <h2>Todo App</h2>
            </div>
            <div className="Todo-Form">
              <input
                type="text"
                placeholder="Add Todo Items"
                onChange={Todoinput}
                value={todoItems}
              />
              <button onClick={AddBtn}>Add</button>
            </div>

            <ul>
              {updateTodo.map((todoval, index) => {
                return (
                  <Ilists
                    key={index}
                    id={index}
                    onSelect={deleteItems}
                    text={todoval}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
