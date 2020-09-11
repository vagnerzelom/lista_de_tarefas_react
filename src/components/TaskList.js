import React from "react";
import Item from "./Item";




export default function TaskList( {lists, deletar}) {

  return (
    

    <ul className="list-group-item " id="ul">
      {lists.map((item, indice) => (
           <Item deletar= {deletar}key= {indice} item={item} indice={indice}/>
      ))}
    </ul>
  );
}