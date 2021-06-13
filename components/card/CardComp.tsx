import React from 'react';
import { CardContainer, CardHeader, Avatar, AvatarImage, CardImage, CardControls, CardContents } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'


const CardComp = () => {
    return (
        <CardContainer>
            <CardHeader>
                <Avatar>
                    <AvatarImage />
                    <span>계정이름</span>
                </Avatar>
                <div>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </CardHeader>
            <CardImage>
                <img src={'https://i.redd.it/kduavprpv8y61.jpg'} />
            </CardImage>
            <CardControls>
                <span>
                    <FontAwesomeIcon icon={faHeart} size="lg" />
                </span>
                <span>
                    <FontAwesomeIcon icon={faComment} size="lg" />
                </span>
                
            </CardControls>
            <CardContents>
                <div className={'like'}>
                    좋아요 1개
                </div>
                <div className={'mainContent'}>
                    <span className={'accountName'}>계정 이름</span>
                    <span className={'content'}>제 고양이입니다,,,</span>
                </div>
                <div className={'comment'}>
                    댓글 1개
                </div>
                <div className={'date'}>
                    16시간 전
                </div>
            </CardContents>
        </CardContainer>
    )
}

export default CardComp;