import { useState } from "react";

function ButtonDisplay(list) {

    const [randomAns, setRandomAns] = useState('');

    function random() {
        setRandomAns(list.list[Math.floor(Math.random() * list.list.length)]);
    };

    return (
        <>
            <button id="getList" value="List" onClick={e => random()}>"Randomise!"</button>
            <p id="listHere" >{ randomAns }</p>
        </>
    )
}

export default ButtonDisplay
