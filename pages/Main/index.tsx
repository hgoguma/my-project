import React, { useCallback } from 'react';
import HeaderComp from '@components/layout/HeaderComp'
import FooterComp from '@components/layout/FooterComp'
import CardComp from '@components/card/CardComp'
import { BodyContainer, Container } from './styles'



const Main = () => {
    return (
        <BodyContainer>
            <HeaderComp />
            <Container>
                <CardComp />
                <CardComp />
            </Container>
            <FooterComp />
        </BodyContainer>
    );
};

export default Main;