import React from "react";
import Rate from "./Rate";

// const data = [[300, 10, "#2798a9", "#2cc1d5"], [450, 50, "#218972", "#24ae8d"], [550, 100, "#c4534c", "#f46a5f"], [1000, 200, "#272f36", "#333a44"]]
const data = [[300, 10, true, false, false, false], [450, 50, false, true, false, false], [550, 100, false, false, true, false], [1000, 200, false, false, false, true]];
// const color = [blue, green, red, black]

function RateList() {

    return (
        <div className="rate-list">
            {data.map((el,ind) => <Rate key={ind} desc={el[0]} speed={el[1]} blue={el[2]} green={el[3]} red={el[4]} black={el[5]}></Rate>)}
        </div>
    )
}

export default RateList;