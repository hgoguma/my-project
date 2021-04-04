import React from 'react';
import { Container, Input } from './styles'

const SignUp = () => {

    
    return (
        <Container>
            <h1>회원가입</h1>
            {/*  Sign Up Container */}
            <div>
                <Input placeholder="Please input your email address" />
                <Input placeholder="Please input your password" />
                <Input placeholder="Please input your password again" />
            </div>
            {/* submit button */}
            <div>
                <button>회원가입</button>
            </div>
            
        </Container>
    );
};

export default SignUp;