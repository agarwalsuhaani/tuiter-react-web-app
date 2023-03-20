
import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js";
const WhoToFollowList = () => {
    return (`
            <div class="list-group">
                <div class="list-group-item">
                    <h7 class="fw-bolder">Who to follow</h7>
                </div>
                ${
                    who.map(who => {
                    return(WhoToFollowListItem(who));
                    }).join('')
                }
                </div>
            `);
    }

export default WhoToFollowList;