import React, { useState } from "react";

function TodoForm(addTodo) {
    const [inputValue, setInputValue] = useState("")



    function formHeandler(e) {
        e.preventDefault();
        if( !inputValue) return;

        addTodo{inputValue};

        setInputValue("");

       
    };

    

    return <div>
        <form onSubmit={formHeandler}>
            <input type="text"
             value={inputValue}
            onChange={(e) =>setInputValue(e.target.value)}/>
            <button type="submit">sumbit</button>
        </form>


    </div>

}

export default TodoForm;