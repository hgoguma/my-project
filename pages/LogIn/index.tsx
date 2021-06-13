import React, { useState, useCallback } from 'react';
import { Container, SignUpContainer, Input, SubmitContainer, LoginContainer } from './styles';
import { Link, Redirect } from 'react-router-dom';

const LogIn = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const onChangeEmail = useCallback((e: any) => {
        setEmail(e.target.value);
    }, [email])

    const onChangePassword = useCallback((e: any) => {
        setPassword(e.target.value);
    }, [password, ])

    const onClickSubmit = useCallback((e: any) => {
        // 서버 리퀘스트
    }, [])

    return (
        <Container>
            <LoginContainer>
                <h1>로그인</h1>
                <div>
                    <Input type="email" value={email} onChange={onChangeEmail} placeholder="이메일" />
                    <Input type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
                </div>
                { !email && <p>이메일을 입력해주세요.</p>}
                { !password && <p>비밀번호를 입력해주세요.</p>}
                <SubmitContainer>
                    <button type="button" onClick={onClickSubmit}>로그인</button>
                </SubmitContainer>
                <SignUpContainer>
                    <button><Link to="/signUp">회원가입 하기</Link></button>
                </SignUpContainer>
            </LoginContainer>
        </Container>
    );
};

export default LogIn;