import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHeart,
    faRetweet,
    faShare,
    faThumbsDown,
    faThumbsDown as solidThumbsDown
} from "@fortawesome/free-solid-svg-icons";
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({ tuit={
    "liked":"true",
    "likes":"4.2k",
    "replies":"4.2k",
    "retuits":"4.2k",
    "disliked":"true",
    "dislikes" : "100"
}
                   }) => {
    const dispatch = useDispatch();
    const likeHandler = (tuit) => {
        const newTuit = {
            ...tuit,
            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
            liked: !tuit.liked
        }
        dispatch(updateTuitThunk(newTuit));
    }

    const dislikeHandler = (tuit) => {
        const newTuit = {
            ...tuit,
            dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
            disliked: !tuit.disliked
        }
        dispatch(updateTuitThunk(newTuit));
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
                        <button onClick={()=> likeHandler(tuit)} className="border-0 bg-white"><FontAwesomeIcon icon={tuit.liked ? solidHeart : faHeart} className={tuit.liked?"text-danger":"text-secondary"}/></button>
                        <span className="ms-3">{tuit.likes}</span>
                    </div>
                    <div className="col-3 ">
                        <button onClick={()=> dislikeHandler(tuit)} className="border-0 bg-white"><FontAwesomeIcon icon={tuit.disliked ? solidThumbsDown : faThumbsDown} className={tuit.disliked?"text-danger":"text-secondary"}/></button>
                        <span className="ms-3">{tuit.dislikes}</span>
                    </div>

                    <a href="#">
                        <FontAwesomeIcon icon={faShare} color= "lightgray"/>
                    </a>
                </div>
    );
};

export default TuitStats;

