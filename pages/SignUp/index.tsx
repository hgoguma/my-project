import React, { useState, useCallback } from 'react';
import { Container, SignUpContainer, Input, SubmitContainer, LoginContainer } from './styles';
import { Link, Redirect } from 'react-router-dom';

const SignUp = () => {

    const [email, setEmail ] = useState('');
    const [name, setName ] = useState('');
    const [password, setPassword ] = useState('');
    const [passwordCheck, setPasswordCheck ] = useState('');

    // 이메일 validation check
    const [emailValidationCheck, setEmailValidationCheck] = useState(true);
    // password validation check
    const [passwordValidationCheck, setPasswordValidationCheck] = useState(false);

    const onChangeEmail = useCallback((e: any) => {
        setEmail(e.target.value);
        const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        setEmailValidationCheck(regExp.test(e.target.value));
    }, [email, emailValidationCheck])

    const onChangeName = useCallback((e: any) => {
        setName(e.target.value);
    }, [name])

    const onChangePassword = useCallback((e: any) => {
        setPassword(e.target.value);
        setPasswordValidationCheck(e.target.value === passwordCheck);
    }, [password, passwordValidationCheck])

    const onChangePasswordCheck = useCallback((e: any) => {
        setPasswordCheck(e.target.value);
        setPasswordValidationCheck(e.target.value === password);
    }, [passwordCheck, passwordValidationCheck])

    const onClickSubmit = useCallback((e: any) => {
    }, [])

    return (
        <Container>
            <SignUpContainer>
                <h1>회원 가입</h1>
                <div>
                    <Input type="email" value={email} onChange={onChangeEmail} placeholder="이메일 주소" />
                    <Input type="text" value={name} onChange={onChangeName} placeholder="사용자 이름" />
                    <Input type="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
                    <Input type="password" value={passwordCheck} onChange={onChangePasswordCheck} placeholder="비밀번호 재입력" />
                </div>
                { !email && <p>이메일을 입력해주세요.</p>}
                { !name && <p>이름을 입력해주세요.</p>}
                { !emailValidationCheck && <p>이메일 형식이 잘못되었습니다.</p>}
                { !passwordValidationCheck && <p>비밀번호가 일치하지 않습니다.</p>}
                <SubmitContainer>
                    <button type="button" onClick={onClickSubmit}>가입</button>
                </SubmitContainer>
                <LoginContainer>
                    <button><Link to="/login">로그인 하기</Link></button>
                </LoginContainer>
            </SignUpContainer>
        </Container>
    );
};

export default SignUp;