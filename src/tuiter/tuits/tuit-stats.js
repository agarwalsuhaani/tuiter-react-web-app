import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart, faRetweet, faShare} from "@fortawesome/free-solid-svg-icons";
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";

import {useDispatch} from "react-redux";
import {increaseLikeCount} from "../reducers/tuits-reducer";

const TuitStats = ({ tuit={
    "liked":"true",
    "likes":"4.2k",
    "replies":"4.2k",
    "retuits":"4.2k"
}
                   }) => {
    const dispatch = useDispatch();
    const likeHandler = (todo) => {
        dispatch(increaseLikeCount(todo))
    }
    return(
                <div className="wd-icon-container text-secondary">
                    <a href="#">
                        <FontAwesomeIcon icon={faComment} color="lightgray"/>
                        <span className="text-secondary">{tuit.replies}</span>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faRetweet} color="lightgray"/>
                        <span className="text-secondary">{tuit.retuits}</span>
                    </a>
                    <div className="col-3 ">
                        <button onClick={()=>likeHandler(tuit)} className="border-0 bg-white"><FontAwesomeIcon icon={tuit.liked ? solidHeart : faHeart} className={tuit.liked?"text-danger":"text-secondary"}/></button>
                        <span className="ms-3">{tuit.likes}</span>
                    </div>

                    <a href="#">
                        <FontAwesomeIcon icon={faShare} color= "lightgray"/>
                    </a>
                </div>
    );
};

export default TuitStats;

