import React from 'react';
import { Footer, Icon } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'


const FooterComp = () => {
    return (
        <Footer>
            <Icon>
                <FontAwesomeIcon icon={faHome} />
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faSearch} />
            </Icon>
            <Icon>
                <FontAwesomeIcon icon={faPlus} />
            </Icon>
        </Footer>
    )
}

export default FooterComp;