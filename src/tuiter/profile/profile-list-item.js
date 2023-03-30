import React from "react";
import {Link} from "react-router-dom";

const ProfileListItem = ({profile = {
    _id:'12345',
    firstName: 'Dhruv',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    bannerPicture: 'data:image/jpeg;base64,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',
    profilePicture: 'data:image/jpeg;base64,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',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '1968-07-07',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223
}})  => {
    return (
        <>
            <div>
                <div className="header">
                    <div className="row p-2">
                        <div className="col-1">
                            <Link to="/tuiter">
                                <i className="fa fa-arrow-left"></i>
                            </Link>
                        </div>

                        <div className="col-9">
                            <h5 className="mb-0 pb-0 fw-bolder">
                                {profile.firstName} {profile.lastName}
                            </h5>
                            <span >{profile.tuits} 1.234k tuits</span>
                        </div>
                    </div>
                </div>

                <div className="mb-5 position-relative">
                    <img className="wd-banner-background" alt="" src={profile.bannerPicture}/>

                    <div>
                        <img className="wd-profile-img" alt="" src={profile.profilePicture}/>
                    </div>

                    <Link to="/tuiter/edit-profile"
                          className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                        Edit profile
                    </Link>

                </div>

                <div className="bioSection p-2">
                    <h5 className="fw-bolder pb-0 mb-0">
                        {profile.firstName} {profile.lastName}<i className="fa fa-badge-check text-primary"></i>
                    </h5>
                    <h6 className="pt-0 fg-color-gray">{profile.handle}</h6>
                    <p className="fg-white pt-2">
                        {profile.bio}
                    </p>
                    <p>
                        <i className="fa fa-map-marker me-2"></i>
                        {profile.location}
                        <i className="fa fa-birthday-cake ms-3 me-2"></i>
                        {profile.dateOfBirth}
                        <i className="far fa-calendar ms-3 me-2"></i>
                        {profile.dateJoined}
                    </p>
                    <b className="fg-white">{profile.followingCount}</b> Following
                    <b className="ms-4 fg-white">{profile.followersCount}</b> Followers

                </div>
            </div>
        </>
    );
}

export default ProfileListItem;