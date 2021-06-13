import React, { useState, useCallback } from 'react';
import { ProfileHeader, ProfileArea, ProfileContainer, AvatarContainer, ProfileStatus, 
    Contents, GalleryContainer, ImageRow, Image } from './styles';
import { Link, Redirect } from 'react-router-dom';

const Profile = () => {

    return (
        <div>
            {/* header */}
            <ProfileHeader>
                헤더헤더
            </ProfileHeader>
            {/* profile area */}
            <ProfileArea>
                <ProfileContainer>
                    <AvatarContainer>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4ODzh_O2Yi6Mq1-1Qdvppx_ba2adZFWsnWr4jixVTT04X0B3Pf-2kv06QnDMzM_3NV0&usqp=CAU" />
                            <span>계정이름</span>
                        </div>
                    </AvatarContainer>
                    <ProfileStatus>
                        게시물 1
                        팔로잉 1
                        팔로워 1
                    </ProfileStatus>
                </ProfileContainer>
                <Contents>
                    자기 소개 자기 소개
                </Contents>
            </ProfileArea>
            
            {/* image card area */}
            <GalleryContainer>
                {/* 한 줄 */}
                <ImageRow>
                    <Image>
                        <img src={""}></img>
                    </Image>
                    <Image>
                        <img src={"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_286/84-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"}></img>
                    </Image>
                    <Image>
                        <img src={"https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_286/84-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg"}></img>
                    </Image>
                </ImageRow>
            </GalleryContainer>
        </div>
    );
};

export default Profile;