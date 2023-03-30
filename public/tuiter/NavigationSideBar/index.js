const NavigationSidebar = (active) => {
    return(` 
 <div id="topheader">
    <div class="list-group nav navbar-nav">
                <a class="list-group-item">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item  ${active === 'home'? "active" : ""} text-truncate" href="../HomeScreen/index.html">
                    <i class="fa fa-home"></i>
                    Home</a>
                <a class="list-group-item  ${active === 'explore'? "active" : ""}" href="../explore/index.html">
                        <i class="fa fa-hashtag"></i>
                        Explore</a>
                    <a class="list-group-item text-truncate ${active === 'notifications'? "active" : ""}" href="../notifications.html">
                        <i class="fa fa-bell"></i>
                        Notifications</a>
                    <a class="list-group-item text-truncate ${active === 'messages'? "active" : ""}" href="../messages.html">
                        <i class="fa fa-envelope"></i> Messages</a>
                    <a class="list-group-item text-truncate ${active === 'bookmark'? "active" : ""}" href="../bookmarks.html">
                        <i class="fa fa-bookmark"></i> Bookmarks</a>
                    <a href="../lists.html" class="list-group-item text-truncate ${active === 'lists'? "active" : ""}">
                        <i class="fa fa-list"></i> Lists </a>
                    <a href="../profile.html" class="list-group-item text-truncate ${active === 'profile'? "active" : ""}">
                        <i class="fa fa-user"></i> Profile</a>
                <a class="list-group-item text-truncate"> <i class="fa fa-minus"></i> More</a>
        </div>
        <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
   </div>
 `);
}
export default NavigationSidebar;

$( '#topheader .navbar-nav a' ).on( 'click', function () {
    $( '#topheader .navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
    $( this ).parent( 'a' ).addClass( 'active' );
});
