import React from 'react';
import HeaderComp from '@components/layout/HeaderComp'
import FooterComp from '@components/layout/FooterComp'
import { BodyContainer, Container } from './styles'

const Main = () => {
    return (
        <BodyContainer>
            <HeaderComp />
            
            <Container>
                메인
            </Container>

            <FooterComp />
        </BodyContainer>
    );
};

export default Main;