import React, { useState } from "react";

const NewItem = () => {
    const [newToDo, setNewToDo] = useState("")
    const [toDos, setToDos] = useState([])

    const deleteItem = (i) => {const actualizeList = toDos.filter((todo, position) => position !== i)
        setToDos(actualizeList);}

    function itemleft () {
        let items = 0;
        items = toDos.length;
        return items
     }
 
    return (
        <div id="todolist" className="container border border-secondary-subtle p-0 ">
            <input id="input" className="form-control  px-5 py-3" placeholder="what's need to be done?" onChange={
                (e) => { setNewToDo(e.target.value) }}
                onKeyDown={(e) => { if (e.key == "Enter" && newToDo!== "") { setToDos([...toDos, newToDo]); e.target.value = ""; setNewToDo("")}}}
            />
            <ul className="list-group"> 
                {toDos.map((todo, i) => {
                return(
                <li className="list-group-item text-start px-5 py-3"> {todo} 
                <button type="button" className="btn-close position-absolute end-0 me-2" onClick={()=>deleteItem(i)}></button>
                </li>)
            })}
            </ul>
<p className="counter"> {itemleft()} items left</p>
        </div>
    )
}
export default NewItem;


