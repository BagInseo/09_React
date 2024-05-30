import React, {useState} from "react";

const NumberPlusMinus = () => {
    const [count, setCount] = useState(0);
    
    return(
        <div className="numberPlusMinus">
            <button onClick={()=>setCount(count-1)} className="button plusBtn">-</button>
            <h3 className="countNum">{count}</h3>
            <button onClick={()=>setCount(count+1)} className="button minusBtn">+</button>
        </div>
    );
}

export default NumberPlusMinus;