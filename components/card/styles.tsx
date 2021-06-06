import styled from '@emotion/styled';

export const CardContainer = styled.div`
  background-color: #fff;
  margin: 10px 0;

  &:first-of-type {
    margin: 0 0;
  }
`;

export const CardHeader = styled.div`
  font-size: 1rem;
  line-height: 46px;
  letter-spacing: -0.75px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 10px;

    &:hover {
      opacity: .8;
    }
  }
`;

export const AvatarImage = styled.img`
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

AvatarImage.defaultProps = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4ODzh_O2Yi6Mq1-1Qdvppx_ba2adZFWsnWr4jixVTT04X0B3Pf-2kv06QnDMzM_3NV0&usqp=CAU',
};


export const CardImage = styled.div`
  width: 100%;
  height: 300px;

  > img {
    width: 100%;
    height: 100%;
  }
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

export const CardContents = styled.div`
  padding: 5px 15px;

  .like, .accountName {
    font-weight: bold;
  }

  .content {
    margin-left: 10px;
  }
  
  .comment, .date {
    color: gray;
  }
  
`