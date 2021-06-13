import styled from '@emotion/styled';

export const Header = styled.header`
  text-align: center;
  background-color: #71879a;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 46px;
  letter-spacing: -0.75px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const Icon = styled.div`
    font-size: 1.5rem;
`;

export const Footer = styled.footer`
    height: 50px;
    background-color: #71879a;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    font-size: 1.1rem;
    position: fixed;
    bottom: 0;
    width: 100%;

    a {
      color: #fff;
      text-decoration: none;
    }
`;
