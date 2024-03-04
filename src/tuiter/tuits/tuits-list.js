import React, {useEffect} from "react";
import TuitItems from "./tuit-items";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitItemsList = () => {
    const {tuits, loading} = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [])
    return(
        <ul className="list-group">
            {
                loading && <li className="list-group-item">Loading...</li>
            }
            {
                !loading && tuits.map(tuit => <TuitItems key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitItemsList;