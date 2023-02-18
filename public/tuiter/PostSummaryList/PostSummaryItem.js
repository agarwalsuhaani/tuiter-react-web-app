


const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
                    <div class="row">
                        <div class="col-8">
                            <div>
                                <b>${post.userName}-${post.time}</b>
                            </div>
                            <div>
                               <b> ${post.title}</b>
                               ${post.tweets}
                            </div>
                        </div>
                        <div class="col">
                        <img src="${post.image}" class="float-end"/>
                            </div>
                    </div>
                    </li>
   `);
}

export default PostSummaryItem;