import { WithTranslation, withTranslation } from "react-i18next";
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";

import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowResize";

const NavBarTop: React.FC<WithTranslation> = ({ t }) => {
    const location = useLocation();
    const windowResize = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => setIsOpen(prevState => !prevState);

    useEffect(() => {
        // Disables Background Scrolling whilst the SideDrawer/Modal is open
        if (typeof window != 'undefined' && window.document && isOpen)
            document.body.style.overflowY = 'hidden';
        else 
            document.body.style.overflowY = 'auto';
    }, [isOpen]);

    return(
        <NavBarTopContainer>
            {location.pathname !== '/' ? (
                <NavBarTopBackContainer to="/" title={t('BackHome')}>
                    <IoChevronBackOutline style={{ marginRight: '1rem' }} />
                    <h5>{t('BackHome')}</h5>
                </NavBarTopBackContainer>
            ) : (
                <>
                    <ListMenuMobile isOpen={isOpen} onClick={handleOpenMenu}>
                        <HiOutlineMenuAlt2 />
                    </ListMenuMobile>

                    <ListMenu>
                        <ListItemMenu to="login">{t('Login')}</ListItemMenu>
                        <ListItemMenuAnchor href="#AboutUs">{t('AboutUs')}</ListItemMenuAnchor>
                    </ListMenu>
                </>
            )}

            <h1 className="cursive">Coffe House</h1>
        </NavBarTopContainer>
    );
}

export const NavBarTopContainer = styled.div`
    width: 100%;
    height: 2rem;
    padding: 2rem;

    font-size: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.text.primary};

    position: fixed;
    top: 0;
    z-index: 3000;
`;

export const NavBarTopBackContainer = styled(Link)`
    display: flex;
    align-items: center;

    position: fixed;
    left: 2rem;

    &:hover {
        filter: brightness(2);
    }

    cursor: pointer;
    transition : filter .3s linear;

    @media(max-width: 800px) {
        h5 {
            display: none;
        }
    }
`;

export const ListMenu = styled.ul`
    list-style: none;

    display: flex;
    gap: 2rem;

    position: fixed;
    left: 2rem;

    @media(max-width: 800px) {
        display: none;
    }
`

export const ListItemMenu = styled(Link)`
    cursor: pointer;

    &:hover {
        filter: brightness(2);
    }
`

export const ListItemMenuAnchor = styled.a`
    cursor: pointer;

    &:hover {
        filter: brightness(2);
    }
`

export const ListMenuMobile = styled("ul")<{ isOpen: boolean }>`
    display: none;
    transition: all .3s ease;

    @media(max-width: 800px) {
        width: ${props => props.isOpen ? '100vw' : '3rem'};
        height: ${props => props.isOpen ? '100vh' : '3rem'};

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: ${props => !props.isOpen && '50%'};
        background-color: ${props => props.isOpen && props.theme.primary};

        -webkit-box-shadow: ${props => !props.isOpen && '0 0 1rem 0 #000000;'};
        box-shadow: ${props => !props.isOpen && '0 0 1rem 0 #000000;'};

        position: ${props => props.isOpen ? 'absolute' : 'fixed'};
        left: ${props => props.isOpen ? '0' : '2rem'};
        top: ${props => props.isOpen && '0'};

        z-index: ${props => props.isOpen && '3001'};

        cursor: ${props => !props.isOpen && 'pointer'};

        body {
            overflow-y: ${props => props.isOpen && 'hidden'};
        }
    }
`

export default withTranslation()(NavBarTop);