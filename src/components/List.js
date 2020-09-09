import React from "react";


export default function List( {lists,deletar}) {

  
  

 
  return (
    

    <ul className="list-group flex-wrap" id="ul">
      {lists.map((item, indice) => (
        <li key={indice} className="list-group-item w-50 h-10 mt-1 li">
          <input type="checkbox" placeholder="O que quer fazer hoje?"></input>
          {item} <button onClick={()=>deletar(indice)} className="botao">Deletar</button>
        </li>
      ))}
    </ul>
  );
}
