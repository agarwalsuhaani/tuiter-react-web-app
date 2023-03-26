import React from "react";
import TuitItems from "./tuit-items";
import { useSelector } from "react-redux";

const TuitItemsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItems
                        key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitItemsList;