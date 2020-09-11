import React from "react";



export default function Item ({item ,indice, deletar}){
    
    return(
    <>
    <li  className=" list-group-item  justify-content-between  w-50% h-10   ">
        <button  onClick={()=>deletar(indice)} className="btn btn-outline-secondary mr-2">Deletar</button>{item}
    </li>

    </>
)
}



