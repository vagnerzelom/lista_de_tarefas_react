import React from "react";



export default function Item ({item ,indice, deletar}){
    
    return(
    <>
    <li  className="list-group-item w-50 h-10 mt-1 li">
    <input type="checkbox" placeholder="O que quer fazer hoje?"></input>
    {item} <button onClick={()=>deletar(indice)} className="botao">Deletar</button>
    </li>

    </>
)
}



