


const WhoToFollowListItem = (who) => {
    return(`
       <div class="list-group-item">
        <div class="row">
            <div class="col-2">
                    <img src=${who.avatarIcon} height="50px" width="50px" class="rounded-circle"/>
            </div>
            <div class="col-10">
                ${who.userName} <i class="fa fa-badge-check"></i><br>
                @${who.handle}
                <button type="button" class="rounded-pill btn-primary float-end">Follow</button>
            </div>
        </div>
    </div>
   `);
}

export default WhoToFollowListItem;