
const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div>
                                <div class="text-secondary"> ${post.topic}</div>
                                ${post.userName}
                                <div class ="text-secondary">${post.time}</div>
                            </div>
                            <div>
                               <b> ${post.title}</b>
                               ${post.tweets}
                            </div>
                        </div>
                        <div class="col">
                        <img src="${post.image}" class="float-end rounded" width="70px" height="70px"/>
                            </div>
                    </div>
                    </li>
   `);
}

export default PostSummaryItem;