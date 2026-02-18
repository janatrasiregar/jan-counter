import { useState } from "react"

// UPDATER FUNCTION, A FUNCTION PASSED AS AN ARGUMENT TO setState() usually
//                  ex. setYear(arrow function)
//                  Allow for safe updates based on the previous state
//                  Used with multiple state updates and asynchronous functions
//                  Good practice to use updater functions

function Counter(){

    const [number, setNumber] = useState(0);

    // Variable Arrow Function
    /*const increase = ()=>{
        setNumber(number + 1);
    }
    const decrease = ()=>{
        setNumber(number - 1);
    }
    const reset = ()=>{
        setNumber(0);
    }*/

    // Updater Functions (PREFER THIS FUNCTION)
    function increase(){

        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches togehther state  updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.
        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue.
        // Durinf the next render, it will call them in the same order.

        setNumber(n => n + 1);
    }
    function decrease(){
        setNumber(n => n - 1);
    }
    function reset(){
        setNumber(n => n = 0);
    }

    return(
        <>
            <div className="counter-container">
                <div className="container-content">
                    <h2 className="num-display">{number}</h2>
                        <button onClick={increase}>+</button>
                        <button onClick={reset}>Reset</button>
                        <button onClick={decrease}>-</button>
                </div>
            </div>
        </>
    )

}

export default Counter