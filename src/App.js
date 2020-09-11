import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import TaskList from "./components/TaskList";


function App() {
  const [lists, setList] = useState([]);
  const [item, setItem] = useState("");

  function addListItem() {
    setList([...lists, item]);

    setItem("");
  }


const deletar = indice =>{

      setList(lists.filter((_,id)=> id !== indice))
      
    }
  
  return (
    <>
      <Header title="To do List" />

      <div className="inputContainer input-group mb-1">
        <h3 className="pt-2">
          <b>Adicione uma tarefa</b>
        </h3>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="input mb-2"
          placeholder="O que quer fazer hoje?"
        />

        <button
          type="button"
          onClick={addListItem}
          className="btn btn-dark"
          id="button"
        >
          Adicionar
        </button>
      </div>

      <TaskList lists={lists} deletar={deletar}/>
    </>
  );
}
;

export default App;
