import styled from '@emotion/styled';

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding: 30px 0;
`;

export const LoginContainer = styled.div`
    max-width: 300px;
    margin: 0 auto;
    padding: 30px 0;
`;

export const Input = styled.input`
    margin: 20px 0;
    height: 35px;
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid #f1f0f0;

    &:focus {
        border-bottom: 1px solid #cde5e7;
    }
`;

export const SubmitContainer = styled.div`
    margin: 15px 0;
    padding: 0 10px;

    > button {
        background-color: #007582;
        color: #fff;
        border: none;
        outline: none;
        padding: 10px;
        width: 100%;

        &:hover {
            background-color: #6fa2a8;
        }
    }
`;

export const SignUpContainer = styled.div`
    margin: 15px 0;
    padding: 0 10px;

    > button {
        background-color: #d5dfe0;
        border: none;
        outline: none;
        padding: 10px;
        width: 100%;

        &:hover {
            background-color: #e8eded;
        }
        a {
            text-decoration: none;
            color: black;
        }
    }
`;