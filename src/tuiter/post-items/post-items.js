import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart, faRetweet, faShare} from "@fortawesome/free-solid-svg-icons";

const PostsItem = ({post = {
    "logo": 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
    "author": 'Elon Musk',
    "userName": '@elonmusk',
    "time": '23h',
    "title": 'Amazing show about @Inspiration4x mission!',
    "image": 'https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/01/931/523/MuskTeslaThumb.png?ve=1&tl=1',
    "topic": 'Countdown: Inspiration4 to launch',
    "para": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n",
    "comment": "4.2K",
    "share": "3.5K",
    "likes": "37.5K"
}
}) => {
    return(
        <li className="list-group-item">
            <div className="wd-rounded-image">
                <img className="wd-img-properties" src={`${post.logo}`} alt=""/>
                <h7 className="">{post.author} </h7>
                <h7 className=" text-secondary"> {post.userName}.{post.time}</h7>
                <br/><br/>
                <p className="wd-main-content">{post.title}</p>
                <img src={`${post.image}`} className="wd-rounded-corners-top" width="504px" height="264px" />
                <h7 className="wd-image-title wd-12px-padding">{post.topic}</h7>
                <br/>
                <p className="wd-image-title wd-color-lightgray wd-padding-left wd-padding-bottom-12px text-secondary">{post.para}</p>

                <div className="wd-icon-container text-secondary">
                    <a href="#">
                        <FontAwesomeIcon icon={faComment} color="lightgray"/>
                        <span className="text-secondary">{post.comment}</span>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faRetweet} color="lightgray"/>
                        <span className="text-secondary">{post.share}</span>
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faHeart} color="lightgray"/>
                        <span className="text-secondary">{post.likes}</span>
                    </a>

                    <a href="#">
                        <FontAwesomeIcon icon={faShare} color= "lightgray"/>
                    </a>
                </div>
            </div>
        </li>

    );
};

export default PostsItem;

