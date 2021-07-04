import styled from '@emotion/styled';

export const ProfileHeader = styled.div`
    background-color: #f1f0f0;
    font-size: 1rem;
    line-height: 46px;
    letter-spacing: -0.75px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
`;

export const ProfileArea = styled.div`
    padding: 10px 15px;
`;

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AvatarContainer = styled.div`
    width: 250px;

    > div {
        display: flex;
        align-items: center;

        > span {
            margin-left: 10px;

            &:hover {
                opacity: .8;
            }
        }
    }
    img {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`

export const ProfileStatus = styled.div`
`;


export const Contents = styled.div`
    margin-top: 15px;
`;


export const GalleryContainer = styled.div`


`;

export const ImageRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Image = styled.div`
    width: 33.33%;
    height: 200px;

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;


export const CardImage = styled.div`
  width: 100%;
  height: 300px;

  
`
export const CardControls = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px 15px;

  > span:first-of-type {
    margin-right: 20px;
  }
`
