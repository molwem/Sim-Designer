import {useState} from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    text: {
      margin: '12px',
    },
  })

function ButtonDisplay(list, name) {

    const classes = useStyles()
    const [randomAns, setRandomAns] = useState('');

    function random() {
        setRandomAns(list.list[Math.floor(Math.random() * list.list.length)]);
    };

    return (
        <>
            <button id="getList" value="List" onClick={e => random()}>Randomise!</button>
            <p className={classes.text}>{randomAns}</p>
        </>
    )
}

export default ButtonDisplay
