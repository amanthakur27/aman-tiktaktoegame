import React, { useState } from "react";
import Box from "./Box";
function Dashboard() {
    const [state, setState] = useState([Array(9).fill(null)])
    const [valueXO, setValueXO] = useState(true)
    const Winner = () => {
        const win1 = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let logic of win1) {
            const [a, b, c] = logic
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]
            }
        }
        return false
    }
    const isWinner = Winner();

    const handleChange = (index) => {
        const copyState = [...state]
        copyState[index] = valueXO ? 'X' : '0'
        setState(copyState)
        setValueXO(!valueXO)
    }
    const handleReset = () => {
        setState(Array(9).fill(null))
    }

    return (
        <>
            <div>
                <h1 style={{textAlign:"center",color: "yellow",backgroundColor: "black"}}>GAME</h1><hr></hr>
            </div>
            <div style={{ margin: '20px' }}>
                {isWinner ? (
                    <> {isWinner} you are the winner <button onClick={handleReset}>Play Again</button> </>
                ) : (
                    <>
                        <h4 style={{textAlign:"center",color: 'red'}}>Player {valueXO ? 'X' : '0'} Please Move</h4>
                        <div className="row">
                            <Box onClick={() => handleChange(0)} value={state[0]} />
                            <Box onClick={() => handleChange(1)} value={state[1]} />
                            <Box onClick={() => handleChange(2)} value={state[2]} />
                        </div>
                        <div className="row">
                            <Box onClick={() => handleChange(3)} value={state[3]} />
                            <Box onClick={() => handleChange(4)} value={state[4]} />
                            <Box onClick={() => handleChange(5)} value={state[5]} />
                        </div>
                        <div className="row">
                            <Box onClick={() => handleChange(6)} value={state[6]} />
                            <Box onClick={() => handleChange(7)} value={state[7]} />
                            <Box onClick={() => handleChange(8)} value={state[8]} />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Dashboard;