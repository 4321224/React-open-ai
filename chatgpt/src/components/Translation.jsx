import React from "react";

export default function Translation({stuff, setInput, result}) {
    return (
        <div>
            <textarea className="text-area" cols={50} rows={10} onChange={(e) => setInput(e.target.value)}></textarea>
            <button className="action-btn" onClick={stuff}> Do you stuff</button>
            <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
        </div>
    )
}