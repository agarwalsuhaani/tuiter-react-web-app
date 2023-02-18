


const PostItem = (post) => {
    return(`
        <li class="list-group-item">
       <div class="wd-rounded-image">
    <img class= "wd-img-properties" src="${post.logo}" alt=""/>
    <h7 class="wd-author-name wd-color-white">${post.author} &nbsp</h7>
    <h7 class = "wd-author-handle">${post.userName} <i class="fa fa-badge-check"></i>. ${post.time}</h7><br><br>
    <p class = "wd-main-content wd-color-white">${post.title}</p>
    <img src="${post.image}" class="wd-rounded-corners-top" width="504px" height="264px">
    <h7 class="wd-color-white wd-image-title wd-12px-padding">${post.topic}</h7><br>
    <p class="wd-image-title wd-color-lightgray wd-padding-left wd-padding-bottom-12px">${post.para}</p>

    <div class="wd-icon-container">
        <a href="#">
            <i class="fa fa-comment" style="color: lightgray"></i>
            <span style="color: lightgray;">${post.comment}</span>
        </a>
        <a href="#">
            <i class="fa fa-retweet" style="color: lightgray"></i>
            <span style="color: lightgray;">${post.share}</span>
        </a>
        <a href="#">
            <i class="fa fa-heart" style="color: lightgrey;"></i>
            <span style="color: lightgrey;">${post.likes}</span>
        </a>

        <a href="#">
            <i class="fa fa-share" style="color: lightgray"></i>
        </a>
    </div>
</div>
   `);
}

export default PostItem;