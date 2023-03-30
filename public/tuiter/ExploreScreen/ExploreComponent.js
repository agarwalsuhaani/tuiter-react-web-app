import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    return(` <div class="row">
                <div class="col-10">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <span class="position-absolute wd-search-tuiter-icon"> <i class="fa fa-search"></i>
                        </span>
                    </div>
                </div>
                <div class="col">
                    <a href="explore-settings.html" class="wd-link">
                        <img src="images/settings-icon.png"  width="32px" height ="32px">
                    </a>
                </div>
            </div>
            <ul class="nav nav-tabs mt-2 mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html" >Sports</a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link" href="entertainment.html" >Entertainment</a>
                </li>
            </ul>
            <div class="position-relative">
                <img src="images/starship.jpg" class="w-100 mt-2">
                <h1 class="position-absolute bottom-0 left-1 text-secondary">SpaceX's Starship</h1>
            </div>
            <ul class="list-group">
            ${PostSummaryList()}
            </ul>
            

`)
}

export default ExploreComponent;