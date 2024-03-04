import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
// import {deleteTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItems = (
    {
        tuit =   {
            "_id" : 123456789,
            "icon" : "apple.jpeg",
            "topic" : "Elon Musk",
            "handle" : "elonmusk",
            "time" : "23h",
            "title" : "Amazing show about <a href='#'>@Inspiration4x</a> mission!",
            "card_image" : "inspiration4x.png",
            "card_title" : "Countdown: Inspiration4 mission to scope | Netflix Official Site ",
            "tuit" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Atque dolores iure, officia pariatur qui quia temporibus veniam voluptas! Adipisci assumenda corporis dicta dolore dolorum hic ipsa placeat rerum! Amet, necessitatibus.",
        }
    }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
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
                    <div><b>{tuit.topic}</b> {tuit.handle} . {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItems;
