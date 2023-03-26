import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItems = ({
                             tuit = {
                                 "topic": "Space",
                                 "userName": "SpaceX",
                                 "time": "2h",
                                 "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                                 "image": "https://wp.technologyreview.com/wp-content/uploads/2021/12/48953946911_7dae1036a2_o.jpg"
                             }}
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={50} height={50} className="float-start rounded-circle" src={`${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div><b>{tuit.userName}</b> {tuit.handle} . {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <TuitStats />
                </div>
            </div>
        </li>
    );
};
export default TuitItems;
