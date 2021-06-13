import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Icon } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faPlus, faBars } from '@fortawesome/free-solid-svg-icons'


const FooterComp = () => {
    return (
        <Footer>
            <Icon>
                <Link to="/main"><FontAwesomeIcon icon={faHome} /></Link>
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faSearch} />
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faPlus} />
            </Icon>
            <Icon>
                <Link to="/profile"><FontAwesomeIcon icon={faBars} /></Link>
            </Icon>
        </Footer>
    )
}

export default FooterComp;