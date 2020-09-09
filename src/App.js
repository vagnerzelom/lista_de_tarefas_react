import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import List from "./components/List";

import { id, className } from "postcss-selector-parser";

function App(props) {
  const [lists, setList] = useState([]);
  const [item, setItem] = useState("");

  function addListItem() {
    setList([...lists, item]);

    setItem("");
  }


function deletar(indice){
  setList(lists.filter((item,id)=> id !== indice))
      
    }
  
  return (
    <>
      <Header title="To do List" />

      <div className="inputContainer input-group">
        <h3 className="pt-2">
          <b>Adicione uma tarefa</b>
        </h3>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="input"
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

      <List lists={lists} deletar={()=>{deletar(indice)}}/>
    </>
  );
}
;

export default App;
